import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfig } from 'src/infrastructure/database/typeorm.config';
import { apolloDriverConfig } from 'src/adapters/graphql/apollo-driver.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
      load: [TypeOrmConfig, apolloDriverConfig],
    }),
  ],
})
export class ConfigureModule {}
