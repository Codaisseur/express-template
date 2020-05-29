"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

/**
 * - importing the User model here to seed data
 * - that way createdAt and updatedAt are added for us
 */

const User = require("../models").user;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "testuser",
          email: "test@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "dummy",
          email: "dummy@dummy.com",
          password: bcrypt.hashSync("dummy1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
