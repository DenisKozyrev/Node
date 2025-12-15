const todos = require("../data/todos");

async function getTodoById(request, reply) {
  const { id } = request.params;

  const todo = todos.find((todo) => {
    return isNaN(id) ? todo.id === id : todo.id === parseInt(id);
  });

  try {
    if (!todo) {
      return reply.status(404).send({
        success: false,
        message: "Todo not found",
      });
    }
    return reply.status(200).send({
      success: true,
      data: todo,
    });
  } catch (error) {
    reply.status(500).send({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
}

module.exports = getTodoById;

