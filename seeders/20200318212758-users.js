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
    /**
     * using User.upsert & Promise.all to create users
     *
     * why:
     *
     * - allows us to run "npx sequelize-cli db:seed:all" multiple times
     * - without having to drop the database
     *
     * how .upsert works
     * - if a user with this email doesn't exist: create it
     * - if a user with this email does exist: update that user
     * - since we want to create multiple users this way we use Promise.all
     *
     * You can do this using:
     * npx sequelize-cli db:drop
     * npm run initdev (creates db, migrates & seeds)
     *
     */
    const users = await Promise.all([
      User.upsert({
        name: "testuser",
        email: "test@test.com",
        password: bcrypt.hashSync("test1234", SALT_ROUNDS),
      }),
      User.upsert({
        name: "dummy",
        email: "dummy@dummy.com",
        password: bcrypt.hashSync("dummy1234", SALT_ROUNDS),
      }),
    ]);

    console.log(`SEEDED: ${users.length} users`);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
