const todos = require("../data/todos");

function getTodos(request, response, next) {
  try {
    response.status(200).json({
      success: true,
      data: todos,
      count: todos.length,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = getTodos;
