const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const todosRouter = require("./koa-routes/todos");

const app = new Koa();

// Error handling middleware (should be first)
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = {
      success: false,
      message: err.message || "Internal Server Error",
    };
    ctx.app.emit("error", err, ctx);
  }
});

// Middleware
app.use(bodyParser());

// Routes
app.use(todosRouter.routes(), todosRouter.allowedMethods());

// 404 handler (should be last)
app.use(async (ctx) => {
  ctx.status = 404;
  ctx.body = {
    success: false,
    message: "Route not found",
  };
});

module.exports = app;
