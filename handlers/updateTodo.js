const todos = require("../data/todos");

function updateTodo(request, response, next) {
  const { id } = request.params;

  const todo = todos.find((todo) => {
    return isNaN(id) ? todo.id === id : todo.id === parseInt(id);
  });

  const todoIndex = todos.findIndex((todo) => {
    return isNaN(id) ? todo.id === id : todo.id === parseInt(id);
  });

  try {
    if (!todo) {
      return response.status(404).json({
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

    response.status(200).json({
      success: true,
      data: { message: "Todo updated successfully" },
    });
  } catch (error) {
    next(error);
  }
}

module.exports = updateTodo;
