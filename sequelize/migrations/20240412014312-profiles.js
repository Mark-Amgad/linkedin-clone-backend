'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";',
    );
    await queryInterface.sequelize.query(
      'CREATE EXTENSION IF NOT EXISTS "pg_trgm";',
    );
    queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS "Profiles"
      (
        id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
        "userId" uuid NOT NULL REFERENCES "Users"(id) ON DELETE CASCADE ON UPDATE CASCADE,
        "headline" TEXT,
        "summary" TEXT,
        "industry" TEXT,
        "website" TEXT,
        "avatar" TEXT,
        "cover" TEXT,
        "noOfConnection" INTEGER NOT NULL,
        "createdAt" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
      );
    `);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS "Profiles";
    `);
  },
};
