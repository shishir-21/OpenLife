const { body } = require("express-validator");

updateTaskValidator = [
  body("_id", "Valid document Id not optional").notEmpty().isMongoId(),
  body("title", "The title must be a string value").isString().optional(),
  body("title", "The title must be at most 100 characters long").isLength({
    max: 100,
  }),
  // Sanitizers
  body("dueDate", "dueDate needs to be valid ISO8601 date string")
    .isISO8601()
    .optional(),

  body(
    "description",
    "The description cannot be empty and must be a string value"
  )
    .isString()
    .trim()
    .optional(),

  body(
    "description",
    "The description cannot be more than 500 characters."
  ).isLength({
    max: 500,
  }),

  body(
    "status",
    "The status must be one of ['todo', 'inProgress', 'completed']"
  )
    .isIn(["todo", "inProgress", "completed"])
    .optional(),

 body(
    "period",
    "The period must be one of ['daily', 'weekly', 'monthly', 'yearly']"
  ).isIn(["daily", "weekly", "monthly", "yearly"]).optional(),
];

module.exports = updateTaskValidator;