module.exports = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "User CURD API",
    description: "User CRUD node API",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
  },
  servers: [
    {
      url: process.env.API_BASE_URL || "http://localhost:3500/api",
      description: "Local server",
    },
  ],
};
