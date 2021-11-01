'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users, Orders}) {
      // define association here
      Users.hasMany(Orders, {foreignKey: "usersId", as:"Order"});

    }
  };
  Users.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    gender: DataTypes.STRING(10)
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};