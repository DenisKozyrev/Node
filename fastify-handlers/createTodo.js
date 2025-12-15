const todos = require("../data/todos");
const uuidv4 = require("uuid").v4;

async function createTodo(request, reply) {
  try {
    const { title, description, completed = false } = request.body;

    if (!title) {
      return reply.status(400).send({
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

    return reply.status(201).send({
      success: true,
      data: newTodo,
    });
  } catch (error) {
    reply.status(500).send({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
}

module.exports = createTodo;

