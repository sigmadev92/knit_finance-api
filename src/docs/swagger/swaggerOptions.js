import { serverURL } from "../../config/urls.js";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Knit Finance - Assignment",
      version: "1.0.0",
      description:
        "<b>API documentation</b> for the backend of Knit Finance Assignment Application built using MERN stack",
    },
    servers: [
      {
        url: serverURL,
      },
    ],

    // ❗ securitySchemes MUST be inside "components"
    components: {
      schemas: {
        User: {
          type: "object",
          properties: {
            fullName: {
              type: "string",
            },
            email: {
              type: "string",
              format: "email",
            },
            _id: {
              type: "string",
              length: 24,
            },
          },
        },
        Task: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              length: 24,
            },
            title: {
              type: "string",
            },
            description: {
              type: "string",
            },
            status: {
              type: "string",
              example: "Approved",
            },
            userId: {
              type: "string",
              length: 24,
            },
          },
        },
      },
      securitySchemes: {
        cookieAuth: {
          type: "apiKey",
          in: "cookie",
          name: "knit_token",
        },
        clientSecret: {
          type: "apiKey",
          in: "header",
          name: "x-client-secret",
        },
      },
    },
  },

  // Path to route docs
  apis: ["./src/docs/swagger/route_docs/**/*.js"],
};

export default swaggerOptions;
