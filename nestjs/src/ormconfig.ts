import { DataSourceOptions } from 'typeorm';
import * as path from 'path';
import { models } from '@entities/index';
import { migrations } from './migrations';

const config: DataSourceOptions = {
  type: 'postgres',
  host: process.env.RSSHCOOL_PG_HOST,
  port: 5432,
  username: process.env.RSSHCOOL_PG_USERNAME,
  password: process.env.RSSHCOOL_PG_PASSWORD,
  database: process.env.RSSHCOOL_PG_DATABASE,
  entities: models,
  migrations,
  synchronize: false,
  migrationsRun: false,
  subscribers: [path.resolve(__dirname, '**/*.subscriber.*')],
  logging: ['migration', 'error', 'warn'],
};

export default config;
