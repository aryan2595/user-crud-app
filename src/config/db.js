require("dotenv").config();

module.exports = {
  development: {
    logging: false,
    dialect: "mysql",
    username: "root",
    host: "127.0.0.1",
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
  },
};
