const express = require('express');
const { createTeam, getAllTeams, addPlayer } = require('../controllers/teamController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/', protect, createTeam);
router.get('/', getAllTeams);
router.post('/:id/add-player', protect, addPlayer);

module.exports = router;
