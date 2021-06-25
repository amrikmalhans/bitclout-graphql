import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Exchange {
  @Field()
  CloutPrice: number;
}
