const { PORT, DB_URL } = require("./config");
const mongoose = require("mongoose");

const connectToDB = (app) => {
    mongoose.connect(DB_URL).then(() => {
        console.log("✅ MongoDB connected");
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    }).catch((err) => {
        console.warn("❌ DB connection failed:", err.message);
        process.exit(1);
    });
};

module.exports = connectToDB;
