'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('tasks', [
       {id:1,description:"grabar curso backend",createdAt:new Date(),updatedAt: new Date},
       {id:2,description:"producir curso backend",createdAt:new Date(),updatedAt: new Date},
       {id:3,description:"subir curso backend",createdAt:new Date(),updatedAt: new Date},
      ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tasks', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
