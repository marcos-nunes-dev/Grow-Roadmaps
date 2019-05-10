import {
  baseResolver,
  isAuthenticatedResolver,
  isAdminResolver,
} from '../../baseResolvers';
import {
  InvalidDataError,
  UserAlreadyExists,
  UserNotFound,
  UnknownError,
} from '../../errors';

const getUserAsAdmin = isAuthenticatedResolver.createResolver(
  async (root, _, { user }) => {
    // return await user.getAsAdmin();
  }
);

const me = isAuthenticatedResolver.createResolver(async (root, _, { user }) => {
  return user;
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
  User: {
    asAdmin: getUserAsAdmin,
  },
  Query: {
    me,
    userById,
    userByEmail,
  },
};
