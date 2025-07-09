const advertisementValidationSchema = require("../validations/advertisementValidation")

module.exports = (req, res, next) => {
    const { error } = advertisementValidationSchema.validate(req.body)
    if (error) {
        const { details } = error
        if (details.length > 0) throw new Error(details[0].message)
    }
    else next()
}