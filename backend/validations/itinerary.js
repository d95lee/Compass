const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');

const validateItineraryInput = [
    check('title')
    .exists({ checkFalsy: true })
    .withMessage('Itinerary title can\'t be blank'),
    check('country')
    .exists({ checkFalsy: true })
    .withMessage('Country can\'t be blank'),
    handleValidationErrors
]

module.exports = validateItineraryInput
