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

// Mutation type
const registerUser = baseResolver.createResolver(async (root, { input }) => {
  // const { email, deviceToken, password } = input;
  // if (!email || !deviceToken || !password) return new InvalidDataError();
  // const existentUser = await models.User.findOne({
  //   where: { email: email },
  // });
  // if (existentUser) return new UserAlreadyExists();
  // return models.sequelize
  //   .transaction(async transaction => {
  //     const userModel = await models.User.build({ email: email });
  //     userModel.password = await userModel.generateHash(password);
  //     const user = await userModel.save({ transaction });
  //     await models.DeviceToken.create(
  //       {
  //         token: deviceToken,
  //         userId: user.id,
  //       },
  //       { transaction }
  //     );
  //     return user;
  //   })
  //   .catch(err => {
  //     return new UnknownError();
  //   });
});

const updateUserFCMToken = isAuthenticatedResolver.createResolver(
  async (root, { input }, { user }) => {
    // const { token } = input;
    // if (!token) return new InvalidDataError();
    // let updatedUser = await user.update({ fcmToken: token });
    // return !!updatedUser;
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
  Mutation: {
    registerUser,
    updateUserFCMToken,
  },
};
