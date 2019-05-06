import express from 'express';
import passport from 'passport';
import LocalStrategy from './passport/LocalStrategy';
import models from '../models';

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
  passport.use('local-login', LocalStrategy());

  // Serialize user
  passport.serializeUser((user, done) => {
    done(null, { id: user.id });
  });

  // Deserialize user
  passport.deserializeUser((data, done) => {
    models.User.findOne({ where: { id: data.id } })
      .then(user => done(null, user))
      .catch(err => done(err, null));
  });

  // Create routes
  const router = express.Router();

  /*
   * Let passport handle the errors for us. If the auth is unsuccessful
   * the router will send a 401. If the auth is successful the callback
   * will be called.
   */

  // router.post(
  //   '/auth/login',
  //   passport.authenticate('local-login', { session: false }),
  //   (req, res, next) => {
  //     // Auth successful, sign and send the token
  //     const payload = {
  //       userId: req.user.id,
  //     };
  //     const opts = { expiresIn: maxAge };
  //     createToken(payload, secret, opts, (err, token) => {
  //       if (err) next(err);
  //       res.json({
  //         user: payload.userId,
  //         token,
  //       });
  //     });
  //   }
  // );

  // router.post('/auth/signup', async (req, res, next) => {
  //   const { email, password } = req.body;
  //   if (!email || !password || password.length < 3) {
  //     return res.json({
  //       error: 'Invalid information',
  //     });
  //   } else {
  //     let existUser = await models.User.findOne({ where: { email } });
  //     if (existUser) {
  //       return res.json({
  //         error: 'This user already exists',
  //       });
  //     } else {
  //       let newUser = await models.User.create({ email: email });
  //       let pass = await newUser.generateHash(password);
  //       await newUser.update({ password: pass });

  //       return createToken(
  //         { userId: newUser.id },
  //         secret,
  //         { expiresIn: maxAge },
  //         (err, token) => {
  //           if (err) next(err);
  //           return res.json({ user: newUser.id, token });
  //         }
  //       );
  //     }
  //   }
  // });

  /*
   * Use the JWT strategy on the /graphql route, this will allow us
   * to extract the user from the token and inject it on the request,
   * so the resolvers can check for the authentication.
   */
  // router.use('/graphql', (req, res, next) => {
  //   passport.authenticate('jwt', { session: false }, (err, user, msg) => {
  //     if (err) {
  //       console.log(`/graphql Authentication error: ${err}`);
  //       return next(err);
  //     }

  //     // If the token is expired, we refuse the connection
  //     if (msg && msg.name === 'TokenExpiredError') {
  //       return res.status(401).json({ error: 'Token Expired' });
  //     }

  //     if (user) {
  //       // If a token is valid and we have an user, inject it in the request
  //       req.user = user;
  //     }
  //     return next();
  //   })(req, res, next);
  // });

  return router;
};
