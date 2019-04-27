import { Strategy as LocalStrategy } from 'passport-local';
import models from '../../models';

export default () => {
  return new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    (email, password, done) => {
      if (!email || !password) return done(null, false);

      models.User.findOne({ where: { email: email } })
        .then(user => {
          if (user === null) {
            return done(null, false);
          }

          user
            .validatePassword(password)
            .then(validation => {
              done(null, validation ? user : false);
            })
            .catch(error => {
              console.log(`LocalStrategy error: ${error}`);
              done(error);
            });
        })
        .catch(error => {
          console.log(`LocalStrategy error [DB]: ${error}`);
          done(error);
        });
    }
  );
};
