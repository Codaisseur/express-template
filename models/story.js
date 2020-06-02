"use strict";
module.exports = (sequelize, DataTypes) => {
  const story = sequelize.define(
    "story",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageUrl: DataTypes.STRING,
      content: DataTypes.TEXT,
    },
    {}
  );
  story.associate = function (models) {};
  return story;
};
