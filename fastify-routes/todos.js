const getTodos = require("../fastify-handlers/getTodos");
const getTodoById = require("../fastify-handlers/getTodoById");
const createTodo = require("../fastify-handlers/createTodo");
const updateTodo = require("../fastify-handlers/updateTodo");
const deleteTodo = require("../fastify-handlers/deleteTodo");

async function todosRoutes(fastify, options) {
  fastify.get("/getAll", getTodos);
  fastify.get("/getById/:id", getTodoById);
  fastify.post("/create", createTodo);
  fastify.put("/update/:id", updateTodo);
  fastify.delete("/delete/:id", deleteTodo);
}

module.exports = todosRoutes;

