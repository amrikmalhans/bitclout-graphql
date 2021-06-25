import { HttpModule, Module } from '@nestjs/common';
import { ExchangeResolver } from './exchange.resolver';
import { ExchangeService } from './exchange.service';

@Module({
  providers: [ExchangeResolver, ExchangeService],
  imports: [HttpModule],
})
export class ExchangeModule {}
