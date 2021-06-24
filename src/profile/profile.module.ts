import { HttpModule, Module } from '@nestjs/common';
import { ProfileResolver } from './profile.resolver';
import { ProfileService } from './profile.service';

@Module({
  providers: [ProfileResolver, ProfileService],
  imports: [HttpModule],
})
export class ProfileModule {}
