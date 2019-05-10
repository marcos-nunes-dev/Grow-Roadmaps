import express from 'express';
import passport from 'passport';
import GitHubStrategy from './strategies/github';

export default ({
  // Express Server
  expressApp = null,
} = {}) => {
  if (expressApp === null) {
    throw new Error('expressApp cannot be null');
  }

  // Initialize passport
  expressApp.use(passport.initialize());
  expressApp.use(passport.session());

  // Use default strategies
  passport.use('github', GitHubStrategy());

  // Serialize user
  passport.serializeUser((user, done) => {
    done(null, JSON.stringify(user));
  });

  // Deserialize user
  passport.deserializeUser((data, done) => {
    try {
      const user = JSON.parse(data);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });

  // Create routes
  const router = express.Router();

  // GitHub Routes
  router.get('/auth/github', passport.authenticate('github', { state: true }));
  router.get(
    '/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/' }),
    (req, res) => {
      res.redirect('/');
    }
  );

  return router;
};
