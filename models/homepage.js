"use strict";
module.exports = (sequelize, DataTypes) => {
  const homepage = sequelize.define(
    "homepage",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      backgroundColor: {
        type: DataTypes.STRING,
        defaultValue: "#ffffff",
      },
      color: {
        type: DataTypes.STRING,
        defaultValue: "#000000",
      },
    },
    {}
  );
  homepage.associate = function (models) {};
  return homepage;
};
