import { Resolver, Query } from '@nestjs/graphql';
import { ExchangeService } from './exchange.service';
import { Exchange } from './models/exchange.model';

@Resolver(() => Exchange)
export class ExchangeResolver {
  constructor(private readonly exchangeService: ExchangeService) {}

  @Query(() => Exchange, { name: 'exchange', nullable: false })
  async getSingleProfile(): Promise<Exchange> {
    return this.exchangeService.getExchange();
  }
}
