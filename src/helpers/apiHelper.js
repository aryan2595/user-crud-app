exports.successResponse = ({ res, msg, status = 200, data = {} }) => {
  return res.status(status).json({
    success: true,
    message: msg,
    status,
    data,
  });
};

exports.errorResponse = ({
  res,
  status = 500,
  error = null,
  msg = "Something went wrong!",
}) => {
  return res.status(status).json({
    success: false,
    message: msg,
    status,
    data: error?.message || msg,
  });
};
