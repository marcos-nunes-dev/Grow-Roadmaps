import { isAuthenticatedResolver } from '../../baseResolvers';

const allModules = isAuthenticatedResolver.createResolver(async () => {
  // return await models.Module.findAll();
});

export default {
  Query: {
    allModules,
  },
};
