'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // foreignKey is the primary key of other table
      this.belongsTo(models.Movies, { foreignKey: 'movieID'})
    }

    toJSON(){
      return { ...this.get, uuid:undefined }
    }
  };
  Rents.init({
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
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'rent time per day',
      validate : {
        notNull: true,
        isInt: true,
      }
    },
    person: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        len: [2, 25]
      }
    }
  }, {
    sequelize,
    modelName: 'Rents',
    tableName:'murat_rents'
  });
  return Rents;
};