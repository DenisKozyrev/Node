const todos = require("../data/todos");

function deleteTodo(request, response, next) {
  try {
    const { id } = request.params;
    const todoIndex = todos.findIndex((todo) => {
      return isNaN(id) ? todo.id === id : todo.id === parseInt(id);
    });

    if (todoIndex === -1) {
      return response.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    todos.splice(todoIndex, 1);

    response.status(200).json({
      success: true,
      data: { message: "Todo deleted successfully" },
    });
  } catch (error) {
    next(error);
  }
}

module.exports = deleteTodo;
