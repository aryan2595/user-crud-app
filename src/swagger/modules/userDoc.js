const { ERROR_RESPONSE_LIST } = require("../constant");

const userDoc = {
  paths: {
    "/user/create": {
      post: {
        tags: ["User CRUD"],
        operationId: "createUser",
        description: "Create User",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UserInput",
              },
            },
          },
        },
        responses: ERROR_RESPONSE_LIST,
      },
    },
    "/user": {
      get: {
        tags: ["User CRUD"],
        operationId: "getUsers",
        description: "Get users",
        responses: ERROR_RESPONSE_LIST,
      },
    },
    "/user/{id}": {
      get: {
        tags: ["User CRUD"],
        description: "Get a single user",
        operationId: "GetUserDetails",
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              $ref: "#/components/schemas/id",
            },
            required: true,
            description: "Get user details",
          },
        ],
        responses: ERROR_RESPONSE_LIST,
      },
    },
    "/user/edit/{id}": {
      put: {
        tags: ["User CRUD"],
        description: "Update User",
        operationId: "updateUser",
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              $ref: "#/components/schemas/id",
            },
            required: true,
            description: "Update user",
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UserInput",
              },
            },
          },
        },
        responses: ERROR_RESPONSE_LIST,
      },
    },
    "/user/delete/{id}": {
      delete: {
        tags: ["User CRUD"],
        description: "Delete User",
        operationId: "deleteUser",
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              $ref: "#/components/schemas/id",
            },
            required: true,
            description: "Delete User",
          },
        ],
        responses: ERROR_RESPONSE_LIST,
      },
    },
  },
};

module.exports = userDoc;
