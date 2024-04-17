const userRoute = require("express").Router();

const { validateError } = require("../middlewares/validator");
const { createUserSchema } = require("../middlewares/validationSchema");
const {
  userList,
  createUser,
  updateUser,
  deleteUser,
  userDetails,
} = require("../controllers/userController");

userRoute.get("/", userList);
userRoute.get("/:id", userDetails);
userRoute.put("/edit/:id", updateUser);
userRoute.delete("/delete/:id", deleteUser);
userRoute.post("/create", [createUserSchema, validateError], createUser);

module.exports = userRoute;
