const { body } = require("express-validator");

deleteTaskValidator = [
  body("_id", "Valid document Id required").notEmpty().isMongoId(),
];

module.exports = deleteTaskValidator;