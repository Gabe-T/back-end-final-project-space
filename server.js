"use strict";

const express = require("express");
const routes = require("./routes");
// const  = require("");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", routes);
// app.use("/", );
// define the port
const DEFAULT_PORT = 3000;
// Use Heroku's PORT or default to 3000.
const port = process.env.PORT || DEFAULT_PORT;
// run the server
app.listen(port, () =>
  console.log(`Listening on
port: ${port}.`)
);
