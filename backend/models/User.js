const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING(60),
    allowNull: false,
    validate: {
      len: [20, 60],
    },
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: { isEmail: true },
  },
  address: {
    type: DataTypes.STRING(400),
  },
  password: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.ENUM('admin', 'user', 'store_owner'),
    defaultValue: 'user',
  },
});

module.exports = User;
