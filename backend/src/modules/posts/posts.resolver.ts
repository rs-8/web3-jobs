import { Args, Mutation, Query, Resolver, Int } from '@nestjs/graphql';
import { AllPostsArgs } from './dto/all-posts.args';
import { PaginatedPosts } from './dto/all-posts.data';
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

  @Query(() => PaginatedPosts, { name: 'posts' })
  findAll(
    @Args() { offset, limit }: AllPostsArgs,
  ): Promise<{ data: PostModel[]; count: number }> {
    return this.postsService.findAll(offset, limit);
  }

  @Query(() => PostModel, { name: 'post' })
  findOne(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<PostModel> {
    return this.postsService.findOne(id);
  }
}
