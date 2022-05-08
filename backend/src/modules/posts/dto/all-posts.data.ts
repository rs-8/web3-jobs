import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PostModel } from '../post.model';

@ObjectType()
export class PaginatedPosts {
  @Field(() => [PostModel])
  data: PostModel[];

  @Field(() => Int)
  count: number;
}
