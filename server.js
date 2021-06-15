// Dependencies
const fs = require('fs');
const express = require('express');


// Use express server
const app = express();

// set initial port
const PORT = process.env.PORT || 3000;

// Link to static assets
app.use(express.static('public'));

// Handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Router
require('./routes/notesRoutes')(app);
require('./routes/htmlRoutes')(app);

// Listener to "start" server
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });