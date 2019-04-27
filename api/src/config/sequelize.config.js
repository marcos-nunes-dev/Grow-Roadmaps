module.exports = {
  development: {
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DB_NAME,
    host: process.env.DEV_DB_HOSTNAME,
    dialect: 'postgres',
    operatorsAliases: false,
  },
  test: {
    username: 'postgres',
    password: 'qweqwe',
    database: 'grow_roadmaps',
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
    logging: false,
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    dialect: 'postgres',
    operatorsAliases: false,
  },
};
