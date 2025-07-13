const express = require('express');
const { login, registerUser } = require('../controller/AuthenticationController'); 

const router = express.Router();

// Login route
router.post('/login', login);

// Register route (you can add this if needed)
router.post('/register', registerUser);

module.exports = router;
