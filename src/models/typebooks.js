'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class typeBooks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({typeBooks, Books}) {
      // define association here
      typeBooks.hasMany(Books, {foreignKey:"typeBooksId", as:"Book"})
    }
  };
  typeBooks.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'typeBooks',
  });
  return typeBooks;
};