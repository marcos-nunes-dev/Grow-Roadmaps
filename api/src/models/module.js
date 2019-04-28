'use strict';

export default (sequelize, DataTypes) => {
  const Module = sequelize.define('Module', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    createdby: {
      type: DataTypes.STRING,
    },
    order: {
      type: DataTypes.STRING,
    },
  });

  // Roadmap.associate = models => {
  //   models.Roadmap.hasMany(models.Module);
  // };

  return Module;
};
