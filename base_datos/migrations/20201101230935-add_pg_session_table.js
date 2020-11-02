'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('session', {
      sid: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      sess: {
        type: Sequelize.JSON
      },
      expire: {
        allowNull: false,
        type: 'TIMESTAMP'
      }
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('session');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
