const mongoose = require("mongoose")
const advertisementSchema = require("../schemas/AdvertisementSchema")

const AdvertisementModel = mongoose.model("Advertisement", advertisementSchema)

module.exports = AdvertisementModel
