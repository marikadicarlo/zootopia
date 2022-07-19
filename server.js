// Require Express.js
const express = require('express');
const fs = require('fs');
const path = require('path');

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


// Step 2. Use listen() method to make server listen
app.listen(PORT, () => {
    console.log(`API server now on PORT ${PORT}!`);
});

