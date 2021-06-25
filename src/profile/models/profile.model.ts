import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { CoinEntry } from 'src/profile/models/coinEntry.model';
import { StakeEntryStats } from './stakeEntryStats.mode';

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

  @Field()
  IsHidden: boolean;

  @Field()
  IsReserved: boolean;

  @Field()
  CoinEntry: CoinEntry;

  @Field(() => Float)
  CoinPriceBitCloutNanos: number;

  @Field(() => Int)
  StakeMultipleBasisPoints: number;

  @Field()
  StakeEntryStats: StakeEntryStats;
}
