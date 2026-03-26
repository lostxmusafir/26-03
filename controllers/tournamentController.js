const Tournament = require('../models/Tournament');

// @desc    Create a new tournament
// @route   POST /api/tournaments
exports.createTournament = async (req, res) => {
    try {
        const { title, game, prizePool, status, participatingTeams } = req.body;

        // Create tournament
        const tournament = await Tournament.create({
            title,
            game: game || 'Valorant',
            prizePool: prizePool || 0,
            status: status || 'Upcoming',
            participatingTeams: participatingTeams || []
        });

        res.status(201).json({
            success: true,
            message: 'Tournament created successfully',
            data: tournament
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Get all tournaments
// @route   GET /api/tournaments
exports.getAllTournaments = async (req, res) => {
    try {
        const tournaments = await Tournament.find()
            .populate({
                path: 'participatingTeams',
                populate: {
                    path: 'captain players',
                    select: 'username gamingAlias'
                }
            });

        res.status(200).json({
            success: true,
            count: tournaments.length,
            data: tournaments
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};