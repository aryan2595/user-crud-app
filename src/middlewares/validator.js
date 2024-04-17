const { validationResult } = require("express-validator");

const { errorResponse } = require("../helpers/apiHelper");

exports.validateError = (req, res, next) => {
  const { errors } = validationResult(req);

  if (errors && errors.length > 0)
    return errorResponse({
      res,
      status: 400,
      error: errors,
      msg: errors[0].msg,
    });

  return next();
};
