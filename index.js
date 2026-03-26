const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

// Route files
const authRoutes = require('./routes/auth');
const teamRoutes = require('./routes/teamRoutes');
const tournamentRoutes = require('./routes/tournamentRoutes');
const matchRoutes = require('./routes/matchRoutes');

const app = express();

// Body parser middleware to accept JSON data
app.use(express.json());

// Mount routers
app.use('/api/auth', authRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/tournaments', tournamentRoutes);
app.use('/api/matches', matchRoutes);

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
