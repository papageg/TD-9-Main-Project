'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    emailAdress: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
  });

  User.associate = (models) => {
    // TODO Add associations.
    User.belongsTo(models.Person, {  
      as: 'director',
      foreignKey: {
        fieldName: 'directorPersonId', 
        allowNull: false,
      },
    });
  };

  return User;
};


// const Model = Sequelize.Model;
// class User extends Model {}
// User.init({
//   // attributes
//   id: {
//     type: Sequelize.INTEGER,
//   },
//   firstName: {
//     type: Sequelize.STRING
//   },
//   lastName: {
//     type: Sequelize.STRING
//     // allowNull defaults to true
//   },
//   emailAdress: {
//     type: Sequelize.STRING
//   },
//   password: {
//     type: Sequelize.STRING
//   }
// }, {
//   sequelize,
//   modelName: 'user'
//   // options
// });