'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('murat_movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: 'This is used as a primary key or primary id'
      },
      uuid: {
          type: DataTypes.UUID,
          defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1
          // Comments can only be added to columns in MySQL, MariaDB, PostgreSQL and MSSQL
          comment: 'This uuid is used as an extra id, so this is not a primary key or primary id'
      },
      name: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      genre: {
        type: Sequelize.STRING
      },
      income: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        //allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        //allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('murat_movies');
  }
};