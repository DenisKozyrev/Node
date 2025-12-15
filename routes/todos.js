const express = require("express");
const router = express.Router();
const getTodos = require("../handlers/getTodos");
const getTodoById = require("../handlers/getTodoById");
const createTodo = require("../handlers/createTodo");
const updateTodo = require("../handlers/updateTodo");
const deleteTodo = require("../handlers/deleteTodo");

router.get("/getAll", getTodos);
router.get("/getById/:id", getTodoById);
router.post("/create", createTodo);
router.put("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);

module.exports = router;
