const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../config/config');

const protectRoute = (role) => {
    return (req, res, next) => {
        const token = req.header("Authorization")?.split(" ")[1];  // Get token from Authorization header

        if (!token) {
            return res.status(401).json({ message: "Access denied, no token provided" });
        }

        try {
            // Verify the token using the secret key
            const decoded = jwt.verify(token, JWT_SECRET_KEY);

            req.user = decoded; // Attach user data to the request object

            // Check if the user has the required role (admin, for example)
            if (role && req.user.role !== role) {
                return res.status(403).json({ message: "Forbidden, you are not authorized" });
            }

            next(); // If everything is okay, move to the next middleware or route handler
        } catch (err) {
            res.status(400).json({ message: "Invalid token" });
        }
    };
};

module.exports = protectRoute;
