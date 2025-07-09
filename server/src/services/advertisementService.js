const AdvertisementModel = require("../models/advertisementModel");

const getAll = async () => await AdvertisementModel.find()

const getById = async (id) => await AdvertisementModel.findById(id)

const getTotalCount = async () => await AdvertisementModel.countDocuments()

const post = async (payload) => await AdvertisementModel.create(payload)

const deleteOne = async (id) => {
    const advertisement = await AdvertisementModel.findById(id);
    if (!advertisement) return;
    return await AdvertisementModel.findByIdAndDelete(id);
};

const updateOne = async (id, payload) => {
    const existing = await AdvertisementModel.findById(id);
    if (!existing) return null;
    return await AdvertisementModel.findByIdAndUpdate(id, payload, { new: true });
};
module.exports = {
    getAll, getById, post, deleteOne, updateOne, getTotalCount
}