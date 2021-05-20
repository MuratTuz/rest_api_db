'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('murat_rents', [{
      id: 1,
      uuid: '0b8b5214-c59f-4f6d-93ab-911b03b45e17',
      movieId: 4,
      duration: 10,
      person: 'murat',
      createdAt: 20171010162834,
      updatedAt: 20171010162834
    },
    {
      id: 2,
      uuid: 'c86dcb04-d58f-4146-8942-a2dcd7e9d85f',
      movieId: 3,
      duration: 7,
      person: 'ali',
      createdAt: 20171010162834,
      updatedAt: 20171010162834
    },
    {
      id: 3,
      uuid: '151e4167-ba47-42d9-90d5-e2aae830e375',
      movieId: 1,
      duration: 13,
      person: 'mehmet',
      createdAt: 20171010162834,
      updatedAt: 20171010162834
    }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     */
     await queryInterface.bulkDelete('murat_rents', null, {});
  }
};
