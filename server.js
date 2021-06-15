// Dependencies
const fs = require("fs");
const express = require("express");
const database = ("./db");

// Use express server
const app = express();

// Port
const PORT = process.env.PORT || 3000;

// Handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });