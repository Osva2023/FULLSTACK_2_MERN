import express from "express";
import cors from "cors";
import records from "./routes/record.js";
import dotenv from "dotenv";
// const express = require("express");
// const cors = require("cors");
// const records = require( "./routes/record.js");
// const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
