const path = require('path');

const ENV = process.env.NODE_ENV || 'development';

const migrations = {
  tableName: 'knex_migrations',
  directory: path.normalize(path.join(__dirname, 'src/db/migrations')),
};

const seeds = {
  directory: path.normalize(path.join(__dirname, `src/db/seeds/${ENV}`)),
};

module.exports = {
  [ENV]: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    debug: false,
    migrations,
    seeds,
  },
};
