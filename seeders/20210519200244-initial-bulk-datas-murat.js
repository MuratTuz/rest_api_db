'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('murat_movies', [{
        id: 1,
        uuid: '3df5e6b5-206d-4b21-8748-14e31c568b5f',
        name: 'lord of the rings',
        year: 1999,
        genre: 'adventure',
        income: 5498700,
        createdAt: 20171010162834,
        updatedAt: Sequelize.fn('NOW')
      },
      {
        id: 2,
        uuid: 'f9187460-e786-477f-ac77-1259e0bd06c3',
        name: 'ghost',
        year: 1982,
        genre: 'thrill',
        income: 235168,
        createdAt: 20171010162834,
        updatedAt: 20171010162834
      },
      {
        id: 3,
        uuid: 'e04fd921-7c96-43fc-a4a9-bb6610d34e54',
        name: 'die hard',
        year: 2001,
        genre: 'action',
        income: 10000000,
        createdAt: 20171010162834,
        updatedAt: 20171010162834
      },
      {
        id: 4,
        uuid: 'e04fd921-7c96-43fc-a4a9-bb6610d34e54',
        name: 'bravehart',
        year: 2005,
        genre: 'romantic',
        income: 3562485,
        createdAt: 20171010162834,
        updatedAt: 20171010162834
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     */
    await queryInterface.bulkDelete('murat_movies', null, {});
  }
};