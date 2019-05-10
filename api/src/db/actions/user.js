import knex from '../knex';
import { POSTGRES_UNIQUE_VIOLATION } from '../constants';
import { UniqueViolation } from '../errors';

// ------------------------------
// Find

export async function findUserById(id, columns = ['*']) {
  return await knex('users')
    .first(columns)
    .where({ id });
}

export async function findUserByIndex(indexName, indexValue, columns = ['*']) {
  return await knex('users')
    .first(columns)
    .where({ [indexName]: indexValue });
}

export async function findOrCreateUser(user, provider) {
  // If the user has an ID then it already exists
  let promise;
  if (user.id) {
    promise = findUserById(user.id);
  } else if (user[provider]) {
    promise = findUserByIndex(provider, user[provider]);
  } else {
    promise = Promise.resolve(null);
  }

  const existentUser = await promise;
  if (existentUser) {
    return existentUser;
  }

  // No user found, create it
  const newUserId = await createUser({ ...user });
  return await findUserById(newUserId);
}

// ------------------------------
// Creation

export async function createUser(userData) {
  try {
    const [id] = await knex('users')
      .insert(userData)
      .returning('id');
    return id;
  } catch (err) {
    if (err.code === POSTGRES_UNIQUE_VIOLATION) {
      if (err.constraint.includes('username'))
        throw new UniqueViolation('Username already in use', 'username');

      if (err.constraint.includes('email'))
        throw new UniqueViolation('Email already in use', 'email');
    }

    throw err;
  }
}
