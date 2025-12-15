const todos = require("../data/todos");

async function deleteTodo(ctx) {
  try {
    const { id } = ctx.params;
    const todoIndex = todos.findIndex((todo) => {
      return isNaN(id) ? todo.id === id : todo.id === parseInt(id);
    });

    if (todoIndex === -1) {
      ctx.status = 404;
      ctx.body = {
        success: false,
        message: "Todo not found",
      };
      return;
    }

    todos.splice(todoIndex, 1);

    ctx.status = 200;
    ctx.body = {
      success: true,
      data: { message: "Todo deleted successfully" },
    };
  } catch (error) {
    ctx.throw(500, error);
  }
}

module.exports = deleteTodo;
