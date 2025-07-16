const Joi = require('joi');

const newsValidationSchema = Joi.object({
    title: Joi.object({
        az: Joi.string().required().trim(),
        en: Joi.string().required().trim(),
    }).required(),
    titleInEng: Joi.string().trim(),
    coverImage: Joi.string().trim(),
});

module.exports = newsValidationSchema;
