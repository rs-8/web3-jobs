import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field()
  position: string;

  @Field()
  companyName: string;
}
