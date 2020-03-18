"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const saltRounds = 10;
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "testuser",
          email: "test@test.com",
          password: bcrypt.hashSync("test1234", saltRounds),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "dummy",
          email: "dummy@dummy.com",
          password: bcrypt.hashSync("dummy1234", saltRounds),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
