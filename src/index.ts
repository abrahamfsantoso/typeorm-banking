import { createConnection } from 'typeorm';

const main = async () => {
  try {
    const connection = await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'abie',
      password: '123456789',
      database: 'typeorm-crashcourse',
    });
    console.log('Connected to Postgres');
  } catch (error) {
    console.error(error);
    throw new Error('Unable to connect to DB');
  }
};

main();
