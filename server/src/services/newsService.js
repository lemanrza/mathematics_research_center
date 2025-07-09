const NewsModel = require("../models/newsModel");

const getAll = async () => await NewsModel.find()

const getById = async (id) => await NewsModel.findById(id)

const getTotalCount = async () => await NewsModel.countDocuments()

const post = async (payload) => await NewsModel.create(payload)

const deleteOne = async (id) => {
    const news = await NewsModel.findById(id);
    if (!news) return;
    return await NewsModel.findByIdAndDelete(id);
};

const updateOne = async (id, payload) => {
    const existing = await NewsModel.findById(id);
    if (!existing) return null;
    return await NewsModel.findByIdAndUpdate(id, payload, { new: true });
};
module.exports = {
    getAll, getById, post, deleteOne, updateOne, getTotalCount
}