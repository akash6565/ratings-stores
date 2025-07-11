// /routes/store.js

const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const store = require('../controllers/store');
//console.log('Auth is:', typeof auth); should be 'function'

router.post('/submit-rating', auth(['user']), store.submitRating);
router.get('/all', auth(['user']), store.getAllStores);
router.get('/owner-ratings', auth(['store_owner']), store.getRatingsForStoreOwner);

module.exports = router;
