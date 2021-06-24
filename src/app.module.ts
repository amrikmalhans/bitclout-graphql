import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    ProfileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
