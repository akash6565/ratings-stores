const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const admin = require('../controllers/admin');

router.get('/dashboard', auth(['admin']), admin.getDashboardStats);
router.post('/add-user', auth(['admin']), admin.addUser);
router.get('/users', auth(['admin']), admin.listUsers);
router.get('/stores', auth(['admin']), admin.listStores);

module.exports = router;
