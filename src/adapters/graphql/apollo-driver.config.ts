import { registerAs } from '@nestjs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import {
  ApolloServerPluginLandingPageProductionDefault,
  ApolloServerPluginLandingPageLocalDefault,
} from '@apollo/server/plugin/landingPage/default';
import { Enhancer } from '@nestjs/graphql';

export const apolloDriverConfig = registerAs(
  'apolloDriverConfig',
  (): ApolloDriverConfig => ({
    driver: ApolloDriver,
    debug: process.env.APP_ENV === 'local',
    playground: false,
    path: 'nm_api/graphql',
    autoSchemaFile: 'src/adapters/graphql/schema.gql',
    sortSchema: true,
    fieldResolverEnhancers: [] as Enhancer[],
    autoTransformHttpErrors: true,
    plugins: [
      process.env.APP_ENV === 'production'
        ? ApolloServerPluginLandingPageProductionDefault({ footer: false })
        : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
    ],
  }),
);
