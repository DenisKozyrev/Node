const fastify = require("fastify")({
  logger: true,
});

const todosRoutes = require("./fastify-routes/todos");

fastify.register(todosRoutes, { prefix: "/todos" });

// 404 handler
fastify.setNotFoundHandler(async (request, reply) => {
  reply.status(404).send({
    success: false,
    message: "Route not found",
  });
});

// Error handler
fastify.setErrorHandler(async (error, request, reply) => {
  reply.status(error.statusCode || 500).send({
    success: false,
    message: error.message || "Internal Server Error",
  });
});

module.exports = fastify;
