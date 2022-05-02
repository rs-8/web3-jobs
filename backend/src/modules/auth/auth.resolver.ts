import {
  UseGuards,
  ClassSerializerInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { Args, Context, Query, Mutation, Resolver } from '@nestjs/graphql';
import { UserModel } from '../users/user.model';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';
import { RegisterInput } from './dto/register.input';
import { UserRequest } from './interfaces/userRequest.interface';
import { JwtAuthGuard } from './jwt-auth.guard';
import JwtRefreshGuard from './jwt-refresh.guard';
import { LocalAuthGuard } from './local-auth.guard';

@UseInterceptors(ClassSerializerInterceptor)
@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Mutation(() => UserModel)
  async register(@Args('registerData') registerData: RegisterInput) {
    return this.authService.register(registerData);
  }

  @UseGuards(LocalAuthGuard)
  @Mutation(() => UserModel)
  async login(
    @Args('loginData') _loginData: LoginInput,
    @Context() ctx: { req: UserRequest },
  ) {
    const { user } = ctx.req;
    const accessTokenCookie = this.authService.getAccessTokenCookie(
      user.name,
      user.id,
    );
    const { token: refreshToken, cookie: refreshTokenCookie } =
      this.authService.getRefreshTokenCookie(user.name, user.id);

    await this.usersService.setCurrentRefreshToken(refreshToken, user.id);

    ctx.req.res.setHeader('Set-Cookie', [
      accessTokenCookie,
      refreshTokenCookie,
    ]);
    return user;
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  async logout(@Context() ctx: { req: UserRequest }) {
    await this.usersService.removeRefreshToken(ctx.req.user.id);
    ctx.req.res.setHeader('Set-Cookie', this.authService.getLogoutCookies());
    return true;
  }

  @UseGuards(JwtRefreshGuard)
  @Query(() => UserModel)
  refresh(@Context() ctx: { req: UserRequest }) {
    const { user } = ctx.req;
    const accessTokenCookie = this.authService.getAccessTokenCookie(
      user.name,
      user.id,
    );

    ctx.req.res.setHeader('Set-Cookie', accessTokenCookie);
    return user;
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => UserModel)
  profile(@Context() ctx: { req: UserRequest }) {
    const { user } = ctx.req;
    return user;
  }
}
