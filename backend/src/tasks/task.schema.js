const { Schema, model } = require("mongoose");

const taskSchema = new Schema(
  {
    title: {
      type: String,
      //! can also be required: true without message
      required: [true, "Task title is required"],
      trim: true,
      maxlength: [100, "Title cannot be more than 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Task description is required"],
      trim: true,
      maxlength: [500, "Description cannot be more than 500 characters"],
    },
    status: {
      type: String,
      required: [true, "Task status is required"],
      enum: ["todo", "inProgress", "completed"],
      default: "todo",
    },
    priority: {
      type: String,
      required: [true, "Task priority is required"],
      enum: ["low", "normal", "high"],
      default: "normal",
    },

    period: {
      type: String,
      required: [true, "Task priority is required"],
      enum: ["daily", "weekly", "monthly", "yearly"],
      default: "daily",
    },

    // Removing createdAt and adding a timestamp instead of that
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    // },
    dueDate: {
      type: Date,
      required: [true, "Due date is required"],
    },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true }
  },
  { timestamps: true }
);

// Create the model and export it
const Task = model("Task", taskSchema);
module.exports = Task;


/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - status
 *         - priority
 *         - period
 *         - dueDate
 *         - user
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the task
 *           maxLength: 100
 *         description:
 *           type: string
 *           description: The description of the task
 *           maxLength: 500
 *         status:
 *           type: string
 *           description: The status of the task
 *           enum: ["todo", "inProgress", "completed"]
 *         priority:
 *           type: string
 *           description: The priority of the task
 *           enum: ["low", "normal", "high"]
 *         period:
 *           type: string
 *           description: The period of the task
 *           enum: ["daily", "weekly", "monthly", "yearly"]
 *         dueDate:
 *           type: string
 *           format: ISO8601 Date String
 *           description: The due date of the task
 *       example:
 *         title: Create a new video
 *         description: A video about fullstack web development
 *         status: todo
 *         priority: normal
 *         period: daily
 *         dueDate: 2025-01-01T12:00:00Z
 */



/**
 * @swagger
 * components:
 *   schemas:
 *     TaskUpdate:
 *       type: object
 *       required:
 *         - _id
 *       properties:
 *         _id:
 *           type: string
 *           description: The MongoDB ObjectId of the task
 *           format: objectId
 *         title:
 *           type: string
 *           description: The title of the task
 *           maxLength: 100
 *         description:
 *           type: string
 *           description: The description of the task
 *           maxLength: 500
 *         status:
 *           type: string
 *           description: The status of the task
 *           enum: ["todo", "inProgress", "completed"]
 *         priority:
 *           type: string
 *           description: The priority of the task
 *           enum: ["low", "normal", "high"]
 *         period:
 *           type: string
 *           description: The period of the task
 *           enum: ["daily", "weekly", "monthly", "yearly"]
 *         dueDate:
 *           type: string
 *           format: date-time
 *           description: The due date of the task
 *       example:
 *         _id: 67012c647e532728101aaee0
 *         title: Create a new video
 *         description: A video about fullstack web development
 *         status: todo
 *         priority: normal
 *         period: daily
 *         dueDate: 2025-01-01T12:00:00Z
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     TaskDelete:
 *       type: object
 *       required:
 *         - _id
 *       properties:
 *         _id:
 *           type: string
 *           description: The MongoDB ObjectId of the task
 *           format: objectId
 *       example:
 *         _id: 67012c647e532728101aaee0
 */