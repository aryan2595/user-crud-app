const { User } = require("../models/index");
const { successResponse, errorResponse } = require("../helpers/apiHelper");

exports.userList = async (req, res) => {
  try {
    const users = await User.findAll();

    return successResponse({
      res,
      data: users,
      msg: "Record found successfully",
    });
  } catch (error) {
    return errorResponse({
      res,
      error,
      msg: error.message,
    });
  }
};

exports.userDetails = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user)
      return errorResponse({
        res,
        error,
        status: 404,
        msg: "Record not found!",
      });

    return successResponse({
      res,
      data: user,
      msg: "Record found successfully",
    });
  } catch (error) {
    return errorResponse({
      res,
      error,
      msg: error.message,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    let existUser = await User.count({ where: { email: req.body.email } });

    if (existUser > 0)
      return errorResponse({
        res,
        status: 400,
        msg: "Email already exist!",
      });

    const user = await User.create(req.body);

    return successResponse({
      res,
      data: user,
      status: 201,
      msg: "Record found successfully",
    });
  } catch (error) {
    return errorResponse({
      res,
      error,
      msg: error.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user)
      return errorResponse({
        res,
        error,
        status: 404,
        msg: "Record not found!",
      });

    await user.update(req.body);

    return successResponse({
      res,
      data: user,
      msg: "Record found successfully",
    });
  } catch (error) {
    return errorResponse({
      res,
      error,
      msg: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user)
      return errorResponse({
        res,
        error,
        status: 404,
        msg: "Record not found!",
      });

    await user.destroy();

    return successResponse({
      res,
      data: user,
      msg: "Record found successfully",
    });
  } catch (error) {
    return errorResponse({
      res,
      error,
      msg: error.message,
    });
  }
};
