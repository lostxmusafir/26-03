const Tournament = require('../models/Tournament');
const Team = require('../models/Team');

// @desc    Create a new tournament
// @route   POST /api/tournaments
exports.createTournament = async (req, res) => {
    try {
        const { title, game, prizePool, status } = req.body;

        // Create tournament
        const tournament = await Tournament.create({
            title,
            game: game || 'Valorant',
            prizePool: prizePool || 0,
            status: status || 'Upcoming',
            participatingTeams: []
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

// @desc    Register team for tournament
// @route   POST /api/tournaments/:id/register
exports.registerTeam = async (req, res) => {
    try {
        const { teamId } = req.body;
        const tournamentId = req.params.id;

        // Find the tournament
        const tournament = await Tournament.findById(tournamentId);
        if (!tournament) {
            return res.status(404).json({ success: false, message: 'Tournament not found' });
        }

        // Check if tournament is still accepting registrations
        if (tournament.status === 'Completed') {
            return res.status(400).json({ success: false, message: 'Tournament has already been completed' });
        }

        // Find the team
        const team = await Team.findById(teamId);
        if (!team) {
            return res.status(404).json({ success: false, message: 'Team not found' });
        }

        // Check if team is already registered
        if (tournament.participatingTeams.includes(teamId)) {
            return res.status(400).json({ success: false, message: 'Team is already registered for this tournament' });
        }

        // Register team to tournament
        tournament.participatingTeams.push(teamId);
        await tournament.save();

        res.status(200).json({
            success: true,
            message: 'Team registered successfully',
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
