"use strict";
const User = require("../models").user;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1 = await User.findOne({
      where: { email: "test@test.com" },
    });

    const user2 = await User.findOne({
      where: { email: "dummy@dummy.com" },
    });

    return queryInterface.bulkInsert(
      "homepages",
      [
        {
          title: "My time at Codaisseur",
          description: "A tell all tale",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "I am a dummy",
          backgroundColor: "#40C076",
          color: "#EDEDED",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("homepages", null, {});
  },
};
