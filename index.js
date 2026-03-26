const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Body parser middleware to accept JSON data
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Basic test route
app.get('/', (req, res) => {
    res.status(200).json({ 
        success: true, 
        message: "Welcome to the E-sports Tournament API. Server is live!" 
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});