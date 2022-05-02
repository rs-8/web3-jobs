import { Args, Mutation, Query, Resolver, Int } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { UserModel } from './user.model';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => UserModel, { name: 'createUser' })
  create(
    @Args('createUserData') createUserData: CreateUserInput,
  ): Promise<UserModel> {
    return this.usersService.create(createUserData);
  }

  @Query(() => [UserModel], { name: 'users' })
  findAll(): Promise<UserModel[]> {
    return this.usersService.findAll();
  }

  @Query(() => UserModel, { name: 'user' })
  findOne(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<UserModel> {
    return this.usersService.findOne(id);
  }

  @Mutation(() => Int, { name: 'removeUser' })
  remove(@Args({ name: 'id', type: () => Int }) id: number): Promise<number> {
    return this.usersService.remove(id);
  }
}
