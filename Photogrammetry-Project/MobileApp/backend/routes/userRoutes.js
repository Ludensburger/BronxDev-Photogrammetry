const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes
router.get('/', userController.getAllUsers);
router.post('/', userController.addUser);
router.post('/login', userController.loginUser);

module.exports = router;
