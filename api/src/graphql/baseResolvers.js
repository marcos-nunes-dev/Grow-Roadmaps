import { isInstance } from 'apollo-errors';
import { createResolver } from 'apollo-resolvers';
import {
  UnknownError,
  UnauthorizedError,
  ForbiddenError,
} from './errors';

const baseResolver = createResolver(null, (root, args, context, err) => {
  if (isInstance(err)) {
    return err;
  }
  if (process.env.NODE_ENV !== 'production') {
    return err;
  }
  return new UnknownError({
    data: {
      name: err.name,
    },
  });
});

const isAuthenticatedResolver = baseResolver.createResolver(
  (root, args, context) => {
    const { user } = context;
    if (!user) throw new UnauthorizedError();
  }
);

const isAdminResolver = isAuthenticatedResolver.createResolver(
  (root, args, { user }) => {
    if (!user.isAdmin()) throw new ForbiddenError();
  }
);

module.exports = {
  baseResolver,
  isAuthenticatedResolver,
  isAdminResolver,
};
