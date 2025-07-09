const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    titleInEng: {
        type: String,
        trim: true,
    },
    coverImage: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = newsSchema;