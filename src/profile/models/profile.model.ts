import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Profile {
  @Field()
  PublicKeyBase58Check: string;

  @Field()
  Username: string;

  @Field()
  Description: string;

  @Field()
  IsVerified: boolean;
}
