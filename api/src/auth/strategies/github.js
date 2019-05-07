import { Strategy } from 'passport-github';
import models from '../../models';

const CLIENT_ID = process.env.GITHUB_OAUTH_CLIENT_ID;
const CLIENT_SECRET = process.env.GITHUB_OAUTH_CLIENT_SECRET;

// GitHub Strategy
export default () => {
  return new Strategy(
    {
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: '/auth/github/callback',
      scope: ['read:user', 'user:email'],
      passReqToCallback: true,
    },
    async (req, token, tokenSecret, profile, done) => {
      const name =
        profile.displayName ||
        (profile._json && profile._json.name) ||
        profile.username ||
        '';

      const splitProfileUrl = profile.profileUrl.split('/');
      const fallbackUsername = splitProfileUrl[splitProfileUrl.length - 1];

      const githubUsername =
        profile.username ||
        (profile._json && profile._json.login) ||
        fallbackUsername;

      const email =
        profile.emails && profile.emails[0] && profile.emails[0].value;

      const pictureUrl =
        (profile._json.avatar_url && profile._json.avatar_url) || null;

      const user = {
        githubProviderId: profile.id,
        githubUsername,
        email,
        name,
        pictureUrl,
      };

      const dbUser = await createOrFindUser(user, 'githubProviderId');
      return done(null, dbUser);
    }
  );
};

// TODO: move to another place
const createOrFindUser = async (user, provider) => {
  // If the user has an ID then it already exists
  let promise;
  if (user.id) {
    promise = models.User.findOne({ where: { id } });
  } else if (user[provider]) {
    promise = models.User.findOne({ where: { [provider]: user[provider] } });
  } else {
    promise = Promise.resolve(null);
  }

  const existentUser = await promise;
  if (existentUser) {
    return existentUser;
  }

  // No user found, create it
  return await models.User.create(user);
};
