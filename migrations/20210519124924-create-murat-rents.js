'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('murat_rents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    uuid: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1
        // Comments can only be added to columns in MySQL, MariaDB, PostgreSQL and MSSQL
        comment: 'This uuid is used as an extra id, so this is not a primary key or primary id'
    },
      movieId: { // foreign key for the murat_movies table
        type: Sequelize.INTEGER
      },
      duration: {
        type: Sequelize.INTEGER
      },
      person: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('murat_rents');
  }
};