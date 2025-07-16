const Joi = require('joi');

const advertisementValidationSchema = Joi.object({
    title: Joi.object({
        az: Joi.string().required().trim(),
        en: Joi.string().required().trim(),
    }).required(),
    coverImage: Joi.string().required().trim(),
});

module.exports = advertisementValidationSchema;
