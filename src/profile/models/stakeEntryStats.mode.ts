import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StakeEntryStats {
  @Field(() => Float)
  TotalStakeNanos: number;

  @Field(() => Float)
  TotalStakeOwedNanos: number;

  @Field(() => Float)
  TotalCreatorEarningsNanos: number;

  @Field(() => Float)
  TotalFeesBurnedNanos: number;

  @Field(() => Float)
  TotalPostStakeNanos: number;
}
