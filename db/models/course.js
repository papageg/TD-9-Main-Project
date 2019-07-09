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
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    description: {
        type: DataTypes.TEXT
    },
    estimatedTime: {
        type: DataTypes.STRING,
        allowNull: true
    },
    materialsNeeded: {
        type: DataTypes.STRING,
        allowNull: true
    }
  });

  Course.associate = (models) => {
    models.Course.belongsTo(models.User, { foreignKey: "userId" });
  };

  return Course;
};