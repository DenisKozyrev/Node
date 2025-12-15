const todos = require("../data/todos");

async function getTodos(ctx) {
  try {
    ctx.status = 200;
    ctx.body = {
      success: true,
      data: todos,
      count: todos.length,
    };
  } catch (error) {
    ctx.throw(500, error);
  }
}

module.exports = getTodos;
