import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const options: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'ehq',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};

module.exports = {};
