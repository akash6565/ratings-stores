const { Op } = require('sequelize');
const User = require('../models/User');
const Store = require('../models/Store');
const Rating = require('../models/Rating');

// Dashboard stats
exports.getDashboardStats = async (req, res) => {
  const userCount = await User.count();
  const storeCount = await Store.count();
  const ratingCount = await Rating.count();
  res.json({ userCount, storeCount, ratingCount });
};

// Add user (admin/store/user)
exports.addUser = async (req, res) => {
  const { name, email, address, password, role } = req.body;
  const hashed = await require('bcrypt').hash(password, 10);
  const user = await User.create({ name, email, address, password: hashed, role });
  res.json(user);
};

// List users (with filters)
exports.listUsers = async (req, res) => {
  const { name, email, address, role } = req.query;
  const where = {
    ...(name && { name: { [Op.like]: `%${name}%` } }),
    ...(email && { email: { [Op.like]: `%${email}%` } }),
    ...(address && { address: { [Op.like]: `%${address}%` } }),
    ...(role && { role }),
  };
  const users = await User.findAll({ where });
  res.json(users);
};

// List stores (with filters and avg ratings)
exports.listStores = async (req, res) => {
  const { name, email, address } = req.query;
  const where = {
    ...(name && { name: { [Op.like]: `%${name}%` } }),
    ...(email && { email: { [Op.like]: `%${email}%` } }),
    ...(address && { address: { [Op.like]: `%${address}%` } }),
  };
  const stores = await Store.findAll({ where });
  const storeData = await Promise.all(
    stores.map(async store => {
      const ratings = await Rating.findAll({ where: { StoreId: store.id } });
      const avgRating = ratings.length ? (ratings.reduce((a, b) => a + b.rating, 0) / ratings.length).toFixed(1) : null;
      return { ...store.toJSON(), avgRating };
    })
  );
  res.json(storeData);
};
