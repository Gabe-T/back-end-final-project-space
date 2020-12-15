"use strict";

const express = require("express");
// const  = require("");
// const  = require("");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
// app.use("/", );
// app.use("/", );

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
