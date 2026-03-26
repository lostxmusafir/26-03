const Team = require('../models/Team');

// @desc    Create a new team
// @route   POST /api/teams
exports.createTeam = async (req, res) => {
    try {
        const { name, players } = req.body;

        // Check if team already exists
        let teamExists = await Team.findOne({ name });
        if (teamExists) {
            return res.status(400).json({ success: false, message: 'Team already exists with this name' });
        }

        // Create team with current user as captain
        const team = await Team.create({
            name,
            captain: req.user._id,
            players: players || []
        });

        res.status(201).json({
            success: true,
            message: 'Team created successfully',
            data: team
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Get all teams
// @route   GET /api/teams
exports.getAllTeams = async (req, res) => {
    try {
        const teams = await Team.find()
            .populate('captain', 'username gamingAlias')
            .populate('players', 'username gamingAlias');

        res.status(200).json({
            success: true,
            count: teams.length,
            data: teams
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};