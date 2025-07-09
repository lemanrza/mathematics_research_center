const Joi = require('joi');

const advertisementValidationSchema = Joi.object({
    title: Joi.string().required().trim(),
    titleInEng: Joi.string().trim(),
    coverImage: Joi.string().trim()
});

module.exports = advertisementValidationSchema;
