const express = require('express');
const { register, login } = require('../controllers/authController');
const { registerValidator, validateResult } = require('../middleware/validators');

const router = express.Router();

router.post('/register', registerValidator, validateResult, register);
router.post('/login', login);

module.exports = router;
