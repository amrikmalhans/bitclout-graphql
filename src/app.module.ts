import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ExchangeModule } from './exchange/exchange.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    ProfileModule,
    ExchangeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
