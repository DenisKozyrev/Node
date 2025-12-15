const todos = require("../data/todos");

async function deleteTodo(request, reply) {
  try {
    const { id } = request.params;
    const todoIndex = todos.findIndex((todo) => {
      return isNaN(id) ? todo.id === id : todo.id === parseInt(id);
    });

    if (todoIndex === -1) {
      return reply.status(404).send({
        success: false,
        message: "Todo not found",
      });
    }

    todos.splice(todoIndex, 1);

    return reply.status(200).send({
      success: true,
      data: { message: "Todo deleted successfully" },
    });
  } catch (error) {
    reply.status(500).send({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
}

module.exports = deleteTodo;

