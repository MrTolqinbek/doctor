const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "My API",
        version: "1.0.0",
      },
      servers: [
        {
          url: "http://localhost:3001",
        },
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
            in: "header",
            name: "Authorization",
          },
        },
        schemas: {
       
        },
        responses: {
          400: {
            description: "Bad Request",
            content: {
              "application/json": {
                description: "Bad Request",
              },
            },
          },
          401: {
              description: "Unauthorized",
              content: {
                  "application/json": {
                      description: "Unauthorized",
                  }
              }
          },
          403: {
              description: "Forbidden",
              content: {
                  "application/json": {
                      description: "Forbidden",
                  }
              }
          },
          404: {
              description: "Not Found",
              content: {
                  "application/json": {
                      description: "Not Found",
                  }
              }
          },
          500:{
              description: "Server Error",
              content: {
                  "application/json": {
                      description: "Server Error",
                  }
              }
          }
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
    },
    apis: ["./routes/swagger/*.js"],
  };
  
  module.exports = options;