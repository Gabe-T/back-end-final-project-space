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

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
