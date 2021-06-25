import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CoinEntry {
  @Field(() => Int)
  CreatorBasisPoints: number;

  @Field(() => Float)
  BitCloutLockedNanos: number;

  @Field(() => Int)
  NumberOfHolders: number;

  @Field(() => Float)
  CoinsInCirculationNanos: number;

  @Field(() => Float)
  CoinWatermarkNanos: number;
}
