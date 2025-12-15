const todos = require("../data/todos");
const uuidv4 = require("uuid").v4;

function createTodo(request, response, next) {
  try {
    const { title, description, completed = false } = request.body;

    if (!title) {
      return response.status(400).json({
        success: false,
        message: "Title is required",
      });
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

    response.status(201).json({
      success: true,
      data: newTodo,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = createTodo;
