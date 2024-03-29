'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
   CREATE TABLE IF NOT EXISTS test (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL);
   `);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('test');
  },
};
