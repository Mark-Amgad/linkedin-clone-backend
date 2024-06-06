'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.changeColumn('Profiles', 'noOfConnections', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.changeColumn('Profiles', 'noOfConnections', {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: null,
    });
  },
};
