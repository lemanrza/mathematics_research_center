const mongoose = require("mongoose");

const advertisementSchema = new mongoose.Schema({
    title: {
        az: {
            type: String,
            required: true,
            trim: true
        },
        en: {
            type: String,
            required: true,
            trim: true
        }
    },
    coverImage: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = advertisementSchema;