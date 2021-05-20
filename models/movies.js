'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // there exists just one copy of each film
    }

    toJSON(){
      // uuid is not to be shown in UI web browser
      return { ...this.get(), uuid:undefined}
    }
  };
  Movies.init({
    id : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      // Comments can only be added to columns in MySQL, MariaDB, PostgreSQL and MSSQL
      comment: 'This is used as a primary key or primary id'
    },
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or Sequelize.UUIDV1
        // Comments can only be added to columns in MySQL, MariaDB, PostgreSQL and MSSQL
        comment: 'This uuid is used as an extra id, so this is not a primary key or primary id'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        len: [2, 25]
      }
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate : {
        notNull: true,
        isInt: true,
      }
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        len: [2, 25]
      }
    },
    income: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movies',
    tableName:'murat_movies'
  });
  return Movies;
};