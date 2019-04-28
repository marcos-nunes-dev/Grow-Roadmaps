'use strict';

export default (sequelize, DataTypes) => {
  const Roadmap = sequelize.define('Roadmap', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    icon: {
      type: DataTypes.STRING,
    },
    createdby: {
      type: DataTypes.STRING,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  Roadmap.associate = models => {
    models.Roadmap.hasMany(models.Module);
  };

  return Roadmap;
};
