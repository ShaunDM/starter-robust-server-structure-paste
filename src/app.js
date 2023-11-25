const express = require("express");
const app = express();
const pastesRouter = require("./pastes/pastes.router");
const usersRouter = require("./users/users.router");

app.use(express.json());

app.use("/users", usersRouter);
app.use("/pastes", pastesRouter);


// Variable to hold the next ID
// Because some IDs may already be used, find the largest assigned ID

// Not found handler
app.use((request, response, next) => {
  next(`Not found: ${request.originalUrl}`);
});

// Error handler
app.use((error, request, response, next) => {
  console.error(error);
  const { status = 500, message = "Something went wrong!"} = error;
  response.status(status).json({error: message});
});

module.exports = app;