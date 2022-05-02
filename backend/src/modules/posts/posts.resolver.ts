import { Args, Mutation, Query, Resolver, Int } from '@nestjs/graphql';
import { CreatePostInput } from './dto/create-post.input';
import { PostModel } from './post.model';
import { PostsService } from './posts.service';

@Resolver()
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Mutation(() => PostModel, { name: 'createPost' })
  create(
    @Args('createUserData') createPostData: CreatePostInput,
  ): Promise<PostModel> {
    return this.postsService.create(createPostData);
  }

  @Query(() => [PostModel], { name: 'posts' })
  findAll(): Promise<PostModel[]> {
    return this.postsService.findAll();
  }

  @Query(() => PostModel, { name: 'post' })
  findOne(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<PostModel> {
    return this.postsService.findOne(id);
  }
}
