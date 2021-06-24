import { Resolver, Query, Args } from '@nestjs/graphql';
import { GetSingleProfileArgs } from './dto/args/getSingleProfile.args';
import { SingleProfile } from './models/singleProfile.model';
import { ProfileService } from './profile.service';

@Resolver(() => SingleProfile)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => SingleProfile, { name: 'user', nullable: true })
  async getSingleProfile(
    @Args() getSingleProfileArgs: GetSingleProfileArgs,
  ): Promise<SingleProfile> {
    return this.profileService.getProfile(getSingleProfileArgs);
  }
}
