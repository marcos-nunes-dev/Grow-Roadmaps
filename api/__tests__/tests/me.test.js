import knexCleaner from 'knex-cleaner';
import { request } from '../utils';
import knex from '../../src/db/knex';
import { ids } from '../../src/db/seeds/test/01_users';

let user = null;

beforeAll(async () => {
  await knexCleaner.clean(knex, {
    ignoreTables: ['knex_migrations', 'knex_migrations_lock'],
  });
  await knex.seed.run();
  user = (await knex('users').where({ id: ids.userOne }))[0];
});

it('should retrieve the current logged in user', async () => {
  const context = { user };

  const query = `
    query Me {
      me {
        id
        name
        email
      }
    }
  `;

  const result = await request(query, { context });
  expect(result).toMatchSnapshot();
});
