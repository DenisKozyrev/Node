const todos = require("../data/todos");
const uuidv4 = require("uuid").v4;

async function createTodo(ctx) {
  try {
    const { title, description, completed = false } = ctx.request.body;

    if (!title) {
      ctx.status = 400;
      ctx.body = {
        success: false,
        message: "Title is required",
      };
      return;
    }

    const newId = uuidv4();

    const newTodo = {
      id: newId,
      title: title,
      description: description || "",
      completed: Boolean(completed),
      createdAt: new Date().toISOString(),
    };

    todos.push(newTodo);

    ctx.status = 201;
    ctx.body = {
      success: true,
      data: newTodo,
    };
  } catch (error) {
    ctx.throw(500, error);
  }
}

module.exports = createTodo;
