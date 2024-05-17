const { body, param } = require("express-validator");

// Create user payload validator
const createUserValidator = () => [
  body("first_name").notEmpty().withMessage("First name is required").isLength({ min: 2 }).withMessage("First name must be at least 2 characters"),
  body("last_name").notEmpty().withMessage("Last name is required").isLength({ min: 2 }).withMessage("Last name must be at least 2 characters"),
  body("email").notEmpty().withMessage("Email is required").isEmail().withMessage("Email is not valid"),
];


// Get a user payload validator
const getUserValidator = () =>  [param("id").isUUID().withMessage("ID must be a valid UUID")];

module.exports = { createUserValidator, getUserValidator };