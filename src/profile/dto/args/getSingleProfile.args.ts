import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetSingleProfileArgs {
  @Field({ nullable: true })
  PublicKeyBase58Check: string;

  @Field()
  Username: string;
}
