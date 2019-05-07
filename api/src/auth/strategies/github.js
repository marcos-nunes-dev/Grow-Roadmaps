import { Strategy } from 'passport-github';
import { findOrCreateUser } from '../../db/actions/user';

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

      const profilePicture =
        (profile._json.avatar_url && profile._json.avatar_url) || null;

      const user = {
        githubProviderId: profile.id,
        githubUsername,
        name,
        username: githubUsername,
        email,
        profilePicture,
      };

      const dbUser = await findOrCreateUser(user, 'githubProviderId');
      return done(null, dbUser);
    }
  );
};
