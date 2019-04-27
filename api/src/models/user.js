'use strict';

import bcrypt from 'bcrypt-nodejs';

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    pictureUrl: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: { isEmail: true },
    },
    points: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING(60),
    },
    fcmToken: DataTypes.STRING,

    // ----------------------------------------
    // * Access level
    // 0: user
    // 1: admin

    accessLevel: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });

  User.prototype.generateHash = function(password, weakSalt = false) {
    return new Promise((resolve, reject) => {
      const saltRounds = process.env.NODE_ENV === 'test' || weakSalt ? 1 : 12;
      bcrypt.genSalt(saltRounds, function(err, salt) {
        if (err) return reject(err);
        bcrypt.hash(password, salt, null, function(err, hash) {
          if (err) return reject(err);
          resolve(hash);
        });
      });
    });
  };

  User.prototype.validatePassword = function(password) {
    return new Promise(resolve => {
      if (!password || !this.password) {
        // Users cannot login with a password if the database
        // entry does not have one
        return resolve(false);
      }
      bcrypt.compare(password, this.password, function(err, res) {
        if (err) return resolve(false);
        resolve(res);
      });
    });
  };

  User.prototype.isAdmin = function() {
    return this.accessLevel === 1;
  };

  User.associate = models => {    
    models.User.belongsTo(models.Admin, {
      as: 'AsAdmin',
      foreignKey: { name: 'asAdminId' },
    });
  };

  return User;
};
