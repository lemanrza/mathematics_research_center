const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../config/config');
const bcrypt = require('bcryptjs');
const { findUserByEmail,  register, comparePasswords } = require('../services/authenticationService');

const login = async (req, res) => {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const user = await findUserByEmail(email);
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isMatch = await comparePasswords(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Create JWT token
        const token = jwt.sign(
            { userId: user._id, role: user.role },
            JWT_SECRET_KEY,
            { expiresIn: '1h' }
        );

        res.json({ token });
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({ message: 'Server error' });
    }
};


const registerUser = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Check if required fields are provided
        if (!email || !password) {
            return res.status(400).json({ message: 'Email, password, and full name are required' });
        }

        // Password hashing
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Call the register function in the service
        const response = await register({
            ...req.body,
            password: hashedPassword,
        });

        if (!response.success) {
            throw new Error(response.message);
        }

        res.status(201).json({
            message: "User registered successfully",
            data: response.data,
        });
    } catch (error) {
        console.error(error);  // Log the error for debugging
        next(error);
    }
};


module.exports = { login, registerUser };
