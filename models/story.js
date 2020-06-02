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
      homepageId: DataTypes.INTEGER,
    },
    {}
  );
  story.associate = function (models) {
    story.belongsTo(models.homepage);
  };
  return story;
};
