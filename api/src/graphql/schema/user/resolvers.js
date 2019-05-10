import { baseResolver, isAuthenticatedResolver } from '../../baseResolvers';
import { findUserById } from '../../../db/actions/user';

const me = baseResolver.createResolver(async (root, _, { user }) => {
  if (!user) {
    return null;
  }

  // Fetches the updated status of the user from DB instead of just returning
  // the object from session
  return await findUserById(user.id);
});

const userById = isAuthenticatedResolver.createResolver(
  async (root, { userId }) => {
    // return await models.User.findById(userId);
  }
);

const userByEmail = isAuthenticatedResolver.createResolver(
  async (root, { userEmail }) => {
    // return await models.User.findOne({ where: { email: userEmail } });
  }
);

export default {
  Query: {
    me,
    userById,
    userByEmail,
  },
};
