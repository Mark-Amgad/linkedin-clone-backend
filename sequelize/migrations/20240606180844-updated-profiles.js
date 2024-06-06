'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.renameColumn(
      'Profiles',
      'noOfConnection',
      'noOfConnections',
    );
  },

  async down(queryInterface, Sequelize) {
    queryInterface.renameColumn(
      'Profiles',
      'noOfConnections',
      'noOfConnection',
    );
  },
};
