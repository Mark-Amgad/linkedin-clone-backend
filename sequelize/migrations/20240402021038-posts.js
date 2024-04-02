'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS "Posts"
      (
        id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
        "userId" uuid NOT NULL REFERENCES "Users"(id) ON DELETE CASCADE ON UPDATE CASCADE,
        "content" TEXT NOT NULL,
        "createdAt" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
      );
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  },
};
