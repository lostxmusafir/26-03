const Team = require('../models/Team');
const User = require('../models/User');

// @desc    Create a new team
// @route   POST /api/teams
exports.createTeam = async (req, res) => {
    try {
        const { name } = req.body;

        // Check if team already exists
        let teamExists = await Team.findOne({ name });
        if (teamExists) {
            return res.status(400).json({ success: false, message: 'Team already exists with this name' });
        }

        // Create team with current user as captain and first player
        const team = await Team.create({
            name,
            captain: req.user._id,
            players: [req.user._id]
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

// @desc    Add player to team
// @route   POST /api/teams/:id/add-player
exports.addPlayer = async (req, res) => {
    try {
        const { playerId } = req.body;
        const teamId = req.params.id;

        // Find the team
        const team = await Team.findById(teamId);
        if (!team) {
            return res.status(404).json({ success: false, message: 'Team not found' });
        }

        // Check if requester is the captain
        if (team.captain.toString() !== req.user._id.toString()) {
            return res.status(403).json({ success: false, message: 'Only the team captain can add players' });
        }

        // Check if team is full (Valorant 5-man limit)
        if (team.players.length >= 5) {
            return res.status(400).json({ success: false, message: 'Team roster is full (max 5 players)' });
        }

        // Check if player exists
        const player = await User.findById(playerId);
        if (!player) {
            return res.status(404).json({ success: false, message: 'Player not found' });
        }

        // Check if player is already in the team
        if (team.players.includes(playerId)) {
            return res.status(400).json({ success: false, message: 'Player is already in the team' });
        }

        // Add player to team
        team.players.push(playerId);
        await team.save();

        res.status(200).json({
            success: true,
            message: 'Player added successfully',
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
