const userRoute = require("./userRoute");

const rootRouter = require("express").Router();

rootRouter.use("/user", userRoute);

module.exports = rootRouter;
