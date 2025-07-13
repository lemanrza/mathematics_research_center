const bcrypt = require('bcryptjs');
const UserModel = require('../models/userModel'); // Assuming you are using Mongoose

const findUserByEmail = async (email) => {
    return await UserModel.findOne({ email });
};

const register = async (payload) => {
    try {
        const { email, username } = payload;

        // Check if user already exists by email or username
        const existingUser = await UserModel.findOne({
            $or: [{ email }, { username }],
        });

        if (existingUser) {
            return {
                success: false,
                message: 'Email or username already taken',
            };
        } else {
            // Create a new user
            const user = await UserModel.create(payload);
            return {
                success: true,
                data: user,
            };
        }
    } catch (error) {
        return {
            success: false,
            message: error.message || 'Internal server error',
        };
    }
};

const comparePasswords = async (inputPassword, storedPassword) => {
    return await bcrypt.compare(inputPassword, storedPassword);
};
module.exports = { findUserByEmail, register, comparePasswords };
