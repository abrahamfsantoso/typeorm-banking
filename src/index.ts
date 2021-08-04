import { createConnection } from 'typeorm';
import { Client } from './entities/Client';
import { Banker } from './entities/Banker';
import { Transaction } from './entities/Transaction';

const main = async () => {
  try {
    const connection = await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'abie',
      password: '123456789',
      database: 'typeorm-crashcourse',
      entities: [Client, Banker, Transaction],
      synchronize: true,
    });
    console.log('Connected to Postgres');
  } catch (error) {
    console.error(error);
    throw new Error('Unable to connect to DB');
  }
};

main();
