const mongoose = require("mongoose")
const newsSchema = require("../schemas/NewsSchema")

const NewsModel = mongoose.model("News", newsSchema)

module.exports = NewsModel
