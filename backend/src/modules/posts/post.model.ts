import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PostModel {
  @Field(() => Int)
  id: number;

  @Field()
  position: string;

  @Field()
  companyName: string;
}
