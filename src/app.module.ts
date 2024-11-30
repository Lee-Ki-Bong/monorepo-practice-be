import { Module } from '@nestjs/common';
import { ConfigureModule } from './infrastructure/configures/configure.module';
import { DatabaseModule } from './infrastructure/database/database.module';
import { MakeshopGraphQLModule } from './adapters/graphql/makeshop-graphql.module';
import { HelloWorldModule } from './modules/helloworld/helloworld.module';

@Module({
  imports: [
    ConfigureModule,
    DatabaseModule,
    MakeshopGraphQLModule,
    HelloWorldModule,
  ],
  providers: [],
})
export class AppModule {}
