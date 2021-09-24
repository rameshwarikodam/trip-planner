"use strict";
module.exports = (sequelize, DataTypes) => {
  const Saveddestination = sequelize.define(
    "saveddestinations",
    {
      destId: {
        type:DataTypes.INTEGER,
        references: {
          model: 'Destinations',
          key: 'id'
        }
      },
      userId: {
        type:DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
    }
  }
  );
  Saveddestination.associate = function (models) {
    // associations can be defined here
    Saveddestination.belongsTo(models.Destinations, {
        foreignKey: 'destId'
      });
    Saveddestination.belongsTo(models.Users, {
      foreignKey: 'userId'
    });
  };
  return Saveddestination;
};
