'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Books, Orders, typeBooks}) {
      // define association here
      Books.hasMany(Orders, {foreignKey:"booksId", as:"Order"});
      Books.belongsTo(typeBooks, {foreignKey:"typeBooksId", as:"type"});
    }
  };
  Books.init({
    name: DataTypes.STRING,
    typeBooksId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Books',
  });
  return Books;
};