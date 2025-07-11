const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Store = require('./Store');

const Rating = sequelize.define('Rating', {
  rating: {
    type: DataTypes.INTEGER,
    validate: { min: 1, max: 5 },
  },
});

Rating.belongsTo(User);
Rating.belongsTo(Store);

module.exports = Rating;
