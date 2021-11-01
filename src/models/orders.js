'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users, Orders, Books}) {
      // define association here
      Orders.belongsTo(Users, {foreignKey: "usersId", as:"User"});
      Orders.belongsTo(Books, {foreignKey:"booksId", as:"Book"});
    }
  };
  Orders.init({
    usersId: DataTypes.INTEGER,
    booksId: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    orderAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};