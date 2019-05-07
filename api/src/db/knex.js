import knex from 'knex';
import knexfile from '../../knexfile';

const ENV = process.env.NODE_ENV || 'development';

export default knex(knexfile[ENV]);
