const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Fullstack Task Manager API",
      version: "1.0.0",
      description: "API documentation for Auth & Task Management",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: [], // we are defining manually below
};

const swaggerSpec = swaggerJsDoc(options);

// 🔥 MANUAL API DEFINITIONS (FULL)
swaggerSpec.paths = {
  "/api/v1/auth/register": {
    post: {
      summary: "Register a new user",
      tags: ["Auth"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: { type: "string" },
                email: { type: "string" },
                password: { type: "string" },
              },
            },
          },
        },
      },
      responses: {
        201: { description: "User registered successfully" },
      },
    },
  },

  "/api/v1/auth/login": {
    post: {
      summary: "Login user",
      tags: ["Auth"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: { type: "string" },
                password: { type: "string" },
              },
            },
          },
        },
      },
      responses: {
        200: { description: "Login successful (returns JWT token)" },
      },
    },
  },

  "/api/v1/tasks": {
    get: {
      summary: "Get all tasks",
      tags: ["Tasks"],
      security: [{ bearerAuth: [] }],
      responses: {
        200: { description: "List of tasks" },
      },
    },
    post: {
      summary: "Create a new task",
      tags: ["Tasks"],
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                title: { type: "string" },
                description: { type: "string" },
              },
            },
          },
        },
      },
      responses: {
        201: { description: "Task created successfully" },
      },
    },
  },

  "/api/v1/tasks/{id}": {
    put: {
      summary: "Update a task",
      tags: ["Tasks"],
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" },
        },
      ],
      responses: {
        200: { description: "Task updated" },
      },
    },
    delete: {
      summary: "Delete a task",
      tags: ["Tasks"],
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" },
        },
      ],
      responses: {
        200: { description: "Task deleted" },
      },
    },
  },

  "/api/v1/admin/users": {
    get: {
      summary: "Get all users (Admin only)",
      tags: ["Admin"],
      security: [{ bearerAuth: [] }],
      responses: {
        200: { description: "List of users" },
        403: { description: "Access denied" },
      },
    },
  },
};

module.exports = swaggerSpec;