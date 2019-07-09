'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    emailAddress: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
  });

  User.associate = (models) => {
    User.hasMany(models.Course);
  };

  return User;
};