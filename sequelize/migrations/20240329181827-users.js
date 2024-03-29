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
      CREATE TABLE IF NOT EXISTS "Users"
      (
        id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
        "name" character varying(255)  NOT NULL,
        "email" character varying(255)  NOT NULL UNIQUE,
        "password" TEXT NOT NULL,
        "location" TEXT NOT NULL,
        "createdAt" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
      );
    `);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS "Users";
    `);
  },
};
