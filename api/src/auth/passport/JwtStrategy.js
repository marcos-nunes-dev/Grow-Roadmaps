import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import models from '../../models';

export default maxAge => {
  const opts = {
    secretOrKey: process.env.SESSION_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    passReqToCallback: true,
    jsonWebTokenOptions: {
      maxAge,
    },
  };

  return new JwtStrategy(opts, (req, payload, done) => {
    if (!payload || !payload.userId) {
      return done(null, false);
    }
    models.User.findById(payload.userId)
      .then(user => {
        if (user === null) {
          return done(null, false);
        }
        return done(null, user);
      })
      .catch(err => {
        done(err);
      });
  });
};
