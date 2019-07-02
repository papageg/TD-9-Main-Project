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
      type: Sequelize.STRING
    },
    emailAddress: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
  });

  User.associate = (models) => {
    User.hasMany(models.Course);
  };

  return User;
};