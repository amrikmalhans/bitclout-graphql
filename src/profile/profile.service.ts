import { Injectable, HttpService } from '@nestjs/common';
import { GetSingleProfileArgs } from './dto/args/getSingleProfile.args';
import { SingleProfile } from './models/singleProfile.model';

@Injectable()
export class ProfileService {
  constructor(private http: HttpService) {}
  public async getProfile(
    getSingleProfileArgs: GetSingleProfileArgs,
  ): Promise<SingleProfile> {
    const res = await this.http
      .post(
        'https://bitclout.com/api/v0/get-single-profile',
        getSingleProfileArgs,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .toPromise();
    return res.data;
  }
}
