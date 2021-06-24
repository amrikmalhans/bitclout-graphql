import { Field, ObjectType } from '@nestjs/graphql';
import { Profile } from './profile.model';

@ObjectType()
export class SingleProfile {
  @Field()
  Profile: Profile;

  @Field()
  IsBlacklisted: boolean;

  @Field()
  IsGraylisted: boolean;
}
