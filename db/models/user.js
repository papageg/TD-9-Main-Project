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
    // User.hasMany(models.Course);
    User.hasMany(models.Course, {
       foreignKey: {
        fieldName:  'userId',
        allowNull: false,
       }
      });
  };

  return User;
};