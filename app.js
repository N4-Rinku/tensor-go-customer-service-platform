import express from "express";
import env from "./constants/env.js";
import { AuthorizationRouter } from "./routes/authorization.js";
import { QueryRouter } from "./routes/query.js";
import database from "./db/database.js";
import cookieParser from "cookie-parser";
import auth from "./middlewares/auth.js";

const app = express();
const port = env.app.PORT;

const validate = auth.validate;

// global middlewares for cookies and body parsing
app.use(cookieParser());
app.use(express.json());

// routes for auth and queries
app.use("/", AuthorizationRouter);
app.use("/query", validate, QueryRouter);

app.get("/home", validate, (req, res) => {
  res.json({ ...req.user });
});

// start the application
app.listen(port, () => {
  console.log("Database connection successful");
  database.Users.setup();
  console.log("Users table (already?) created");
  database.Tokens.setup();
  console.log("Tokens table (already?) created");

  console.log(`Application listening on ${env.url}`);
});

// when exiting the application, can be used to close running things
process.on("SIGINT", () => {
  database.close();
  console.log("Exiting the application");
});
