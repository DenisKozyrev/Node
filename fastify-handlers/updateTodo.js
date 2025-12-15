const todos = require("../data/todos");

async function updateTodo(request, reply) {
  const { id } = request.params;

  const todo = todos.find((todo) => {
    return isNaN(id) ? todo.id === id : todo.id === parseInt(id);
  });

  const todoIndex = todos.findIndex((todo) => {
    return isNaN(id) ? todo.id === id : todo.id === parseInt(id);
  });

  try {
    if (!todo) {
      return reply.status(404).send({
        success: false,
        message: "Todo not found",
      });
    }
    const { title, description, completed = false } = request.body;

    const newTodo = {
      ...todo,
      title: title,
      description: description,
      completed: completed,
      updatedAt: new Date().toISOString(),
    };

    todos.splice(todoIndex, 1, newTodo);

    return reply.status(200).send({
      success: true,
      data: { message: "Todo updated successfully" },
    });
  } catch (error) {
    reply.status(500).send({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
}

module.exports = updateTodo;

