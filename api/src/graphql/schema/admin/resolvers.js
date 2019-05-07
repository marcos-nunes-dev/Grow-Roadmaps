import { isAuthenticatedResolver, isAdminResolver } from '../../baseResolvers';
import {
  UnknownError,
  DataAlreadyExists,
  InvalidDataError,
  AdminIsNotCreated,
} from '../../errors';

const getUser = isAuthenticatedResolver.createResolver(async root => {
  // return await models.User.findOne({ where: { asAdminId: root.id } });
});

const createAdmin = isAdminResolver.createResolver(async (root, { input }) => {
  // const { userId } = input;
  // const user = await models.User.findById(userId);
  // if (!user) return new InvalidDataError();
  // if (user.asAdminId) return new DataAlreadyExists();
  // return models.sequelize
  //   .transaction(async transaction => {
  //     const admin = await models.Admin.create(
  //       {
  //         userId,
  //       },
  //       { transaction }
  //     );
  //     await user.setAsAdmin(admin, { transaction });
  //     await user.update({ accessLevel: 1 }, { transaction });
  //     return admin;
  //   })
  //   .catch(err => {
  //     return new UnknownError();
  //   });
});

export default {
  Admin: {
    user: getUser,
  },
  Mutation: {
    createAdmin,
  },
};
