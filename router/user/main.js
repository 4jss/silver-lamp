const express = require('express');
const router = express.Router();

router.get('/dashboard', require('./dashboard'));

module.exports = router;