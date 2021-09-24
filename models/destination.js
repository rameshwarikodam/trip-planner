"use strict";
module.exports = (sequelize, DataTypes) => {
  const Destination = sequelize.define("Destinations", {
    title: DataTypes.STRING,
    address: DataTypes.STRING,
    pincode: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    visiting_fee: DataTypes.STRING,
    description: DataTypes.STRING,
    picture: DataTypes.STRING,
  });
  Destination.associate = function (models) {
    // associations can be defined here
  };
  return Destination;
};
