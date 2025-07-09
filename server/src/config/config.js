require("dotenv").config();

module.exports = {
    PORT: process.env.PORT || 3000,
    DB_URL: process.env.DB_URL,
    DB_PASSWORD: process.env.DB_PASSWORD, 
    DB_USERNAME: process.env.DB_USERNAME
};
