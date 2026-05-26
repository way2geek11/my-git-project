// Import Express
const express = require('express');

// Create an Express application
const app = express();

// Set the port number using an environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Define a route for the homepage
app.get('/', (req, res) => {
    res.send('Hello from Dockerized App!');
});

// Start the server on the specified port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
