const express = require('express');
const { createTournament, getAllTournaments, registerTeam } = require('../controllers/tournamentController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/', protect, createTournament);
router.get('/', getAllTournaments);
router.post('/:id/register', protect, registerTeam);

module.exports = router;
