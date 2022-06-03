import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions={
    type: 'postgres',
    host: 'localhost',
    port: 8892,
    username: 'root',
    password: 'root',
    database: 'chocadeira2',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true
};