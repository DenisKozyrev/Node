const todos = require("../data/todos");

async function updateTodo(ctx) {
  const { id } = ctx.params;

  const todo = todos.find((todo) => {
    return isNaN(id) ? todo.id === id : todo.id === parseInt(id);
  });

  const todoIndex = todos.findIndex((todo) => {
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
    const { title, description, completed = false } = ctx.request.body;

    const newTodo = {
      ...todo,
      title: title,
      description: description,
      completed: completed,
      updatedAt: new Date().toISOString(),
    };

    todos.splice(todoIndex, 1, newTodo);

    ctx.status = 200;
    ctx.body = {
      success: true,
      data: { message: "Todo updated successfully" },
    };
  } catch (error) {
    ctx.throw(500, error);
  }
}

module.exports = updateTodo;
