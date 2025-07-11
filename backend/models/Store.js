const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Store = sequelize.define('Store', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  address: DataTypes.STRING,
});

Store.belongsTo(User, { as: 'owner', foreignKey: 'owner_user_id' });

module.exports = Store;
