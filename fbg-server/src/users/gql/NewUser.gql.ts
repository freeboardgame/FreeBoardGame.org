import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class NewUser {
  @Field((type) => String)
  jwtToken: string;
}
