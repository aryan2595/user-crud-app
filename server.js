const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const dotenvExpand = require("dotenv-expand");
const swaggerUI = require("swagger-ui-express");

dotenvExpand.expand(dotenv.config());

const docs = require("./src/swagger");
const rootRouter = require("./src/routes");

const app = express();
const PORT = process.env.PORT || 3500;

// Middlewares
app.use(cors());
app.use(express.json());

// Swagger documentation
app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(docs));

// CRON Jobs
const cronJob = require("./src/jobs");
cronJob.initJob();

// All routes
app.use("/api", rootRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on ${process.env.API_BASE_URL} \n`);
  console.log(`Swagger URL: ${process.env.API_BASE_URL}/docs \n`);
});
