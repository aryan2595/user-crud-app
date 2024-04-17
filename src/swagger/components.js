module.exports = {
  components: {
    schemas: {
      id: {
        type: "integer",
        description: "Schema description",
      },
      UserInput: {
        type: "object",
        properties: {
          firstName: {
            type: "string",
            example: "Test",
            description: "Please first name",
          },
          lastName: {
            type: "string",
            example: "Test",
            description: "Please last name",
          },
          email: {
            type: "string",
            description: "Please email",
            example: "test@test.com",
          },
        },
      },
      Error: {
        type: "object",
        properties: {
          message: {
            type: "string",
          },
          internal_code: {
            type: "string",
          },
        },
      },
    },
  },
};
