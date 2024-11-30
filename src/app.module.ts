import { Module } from '@nestjs/common';
import { ConfigureModule } from './infrastructure/configures/configure.module';
import { DatabaseModule } from './infrastructure/database/database.module';

@Module({
  imports: [ConfigureModule, DatabaseModule],
  providers: [],
})
export class AppModule {}
