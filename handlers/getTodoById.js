const todos = require("../data/todos");

function getTodoById(request, response, next) {
  const { id } = request.params;

  const todo = todos.find((todo) => {
    return isNaN(id) ? todo.id === id : todo.id === parseInt(id);
  });

  try {
    if (!todo) {
      return response.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }
    response.status(200).json({
      success: true,
      data: todo,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = getTodoById;
