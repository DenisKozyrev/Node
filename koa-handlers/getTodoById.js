const todos = require("../data/todos");

async function getTodoById(ctx) {
  const { id } = ctx.params;

  const todo = todos.find((todo) => {
    return isNaN(id) ? todo.id === id : todo.id === parseInt(id);
  });

  try {
    if (!todo) {
      ctx.status = 404;
      ctx.body = {
        success: false,
        message: "Todo not found",
      };
      return;
    }
    ctx.status = 200;
    ctx.body = {
      success: true,
      data: todo,
    };
  } catch (error) {
    ctx.throw(500, error);
  }
}

module.exports = getTodoById;
