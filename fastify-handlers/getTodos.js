const todos = require("../data/todos");

async function getTodos(request, reply) {
  try {
    return reply.status(200).send({
      success: true,
      data: todos,
      count: todos.length,
    });
  } catch (error) {
    reply.status(500).send({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
}

module.exports = getTodos;

