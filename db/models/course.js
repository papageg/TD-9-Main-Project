'use strict';

module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
      
    },
    userId: {
        type: DataTypes.INTEGER
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
    models.Course.belongsTo(models.User, { foreignKey: "userId" });
  };

  return Course;
};