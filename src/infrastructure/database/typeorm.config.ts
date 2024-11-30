import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DefaultNamingStrategy } from 'typeorm';

export const TypeOrmConfig = registerAs(
  'TypeOrmConfig',
  (): TypeOrmModuleOptions => ({
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT),
    database: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    autoLoadEntities: true,
    subscribers: [],
    synchronize: false,
    logging: false,
    charset: 'utf8mb4',
    namingStrategy: new DefaultNamingStrategy(),
  }),
);
