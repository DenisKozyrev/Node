#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require("../app-fastify");
const port = normalizePort(process.env.PORT || "3002");

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Start server
 */

async function start() {
  try {
    await app.listen({ port: port, host: "0.0.0.0" });
    console.log(`Fastify server listening on port ${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

start();

