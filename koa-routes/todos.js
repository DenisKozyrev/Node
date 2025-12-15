const Router = require("@koa/router");
const getTodos = require("../koa-handlers/getTodos");
const getTodoById = require("../koa-handlers/getTodoById");
const createTodo = require("../koa-handlers/createTodo");
const updateTodo = require("../koa-handlers/updateTodo");
const deleteTodo = require("../koa-handlers/deleteTodo");

const router = new Router();

router.get("/getAll", getTodos);
router.get("/getById/:id", getTodoById);
router.post("/create", createTodo);
router.put("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);

module.exports = router;
