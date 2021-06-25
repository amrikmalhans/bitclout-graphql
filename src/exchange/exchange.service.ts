import { Injectable, HttpService } from '@nestjs/common';
import { exchangeHelper } from 'helpers/exchange.helper';
import { Exchange } from './models/exchange.model';

@Injectable()
export class ExchangeService {
  constructor(private http: HttpService) {}
  public async getExchange(): Promise<Exchange> {
    const getSatoshiExchange = await this.http
      .get('https://api.bitclout.com/get-exchange-rate')
      .toPromise();

    const getTicker = await this.http
      .get('https://blockchain.info/ticker')
      .toPromise();

    const exhcange = exchangeHelper(
      getTicker.data.USD.last,
      getSatoshiExchange.data.SatoshisPerBitCloutExchangeRate,
    );

    return {
      CloutPrice: exhcange,
    };
  }
}
