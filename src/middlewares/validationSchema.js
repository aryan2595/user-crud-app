const { body } = require("express-validator");

exports.createUserSchema = [
  body("firstName", "First name is required!").notEmpty(),
  body("lastName", "Last name is required!").notEmpty(),
  body("email", "Email is required!").notEmpty().isEmail(),
];
