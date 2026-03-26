const express = require('express');
const { createTournament, getAllTournaments, registerTeam } = require('../controllers/tournamentController');
const { protect } = require('../middleware/auth');
const advancedResults = require('../middleware/advancedResults');
const Tournament = require('../models/Tournament');

const router = express.Router();

router.post('/', protect, createTournament);
router.get('/', advancedResults(Tournament, {
    path: 'participatingTeams',
    populate: {
        path: 'captain players',
        select: 'username gamingAlias'
    }
}), getAllTournaments);
router.post('/:id/register', protect, registerTeam);

module.exports = router;
