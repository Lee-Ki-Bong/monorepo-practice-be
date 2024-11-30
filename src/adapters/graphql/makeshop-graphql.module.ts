import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: async (configService: ConfigService) =>
        (await configService.getOrThrow(
          'apolloDriverConfig',
        )) as ApolloDriverConfig,
      inject: [ConfigService],
    }),
  ],
})
export class MakeshopGraphQLModule {}
