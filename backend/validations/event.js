const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');



const validateEventInput = [
    check('eventTitle')
      .exists({ checkFalsy: true })
      .withMessage('Even Title can\'t be blank'),
    check('startTime')
        .exists({ checkFalsy: true })
        .withMessage('Start time can\'t be blank')
        .isLength({ min: 5, max: 5 })
        .withMessage('Start time must be HH:MM')
        .matches(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)
        .withMessage('Start time must be in format HH:MM'),
    check('endTime')
        .exists({ checkFalsy: true })
        .withMessage('End time can\'t be blank')
        .isLength({ min: 5, max: 5 })
        .withMessage('End time must be HH:MM')
        .matches(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)
        .withMessage('End time must be in format HH:MM'),
    check('location')
        .exists({ checkFalsy: true })
        .withMessage('Location can\'t be blank'),
    check('category')
        .exists({ checkFalsy: true })
        .withMessage('Category can\'t be blank'),
    check('cost')
        .exists({ checkFalsy: true })
        .withMessage('Cost can\'t be blank'),
    handleValidationErrors
  ];
  
  module.exports = validateEventInput;