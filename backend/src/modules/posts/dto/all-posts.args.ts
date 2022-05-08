import { Field, ArgsType, Int } from '@nestjs/graphql';

@ArgsType()
export class AllPostsArgs {
  @Field(() => Int)
  offset?: number;

  @Field(() => Int)
  limit?: number;
}
