'use strict';

module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    id: {
      type: DataTypes.INTEGER
    },
    CourseId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    description: {
        type: Sequelize.TEXT
    },
    estimatedTime: {
        type: Sequelize.STRING,
        allowNull: true
    },
    materialsNeeded: {
        type: Sequelize.STRING,
        allowNull: true
    }
  });

  Course.associate = (models) => {
    Course.belongsTo(models.Person, {  
      as: 'director',
      foreignKey: {
        fieldName: 'directorPersonId', 
        allowNull: false,
      },
    });
  };

  return Course;
};

// class Course extends Model {}
// Course.init({
//   // attributes
//   id: {
//     type: Sequelize.INTEGER,
//   },
//   CourseId: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   title: {
//     type: Sequelize.STRING
//     // allowNull defaults to true
//   },
//   description: {
//     type: Sequelize.TEXT
//   },
//   estimatedTime: {
//     type: Sequelize.STRING,
//     allowNull: true
//   },
//   materialsNeeded: {
//     type: Sequelize.STRING,
//     allowNull: true
//   }
// }, {
//   sequelize,
//   modelName: 'Course'
//   // options
// });