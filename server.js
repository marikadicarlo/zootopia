const express = require('express');
const fs = require('fs');
const path = require('path');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const {animals} = require('./data/animals.json');

const PORT = process.env.PORT || 3001;

// Start the server in two steps
// Step 1. Instantiate the server
const app = express();

// Require Middleware
app.use(express.static('public'));

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// Step 2. Use listen() method to make server listen
app.listen(PORT, () => {
    console.log(`API server now on PORT ${PORT}!`);
});

