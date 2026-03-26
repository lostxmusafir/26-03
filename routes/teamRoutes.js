const express = require('express');
const { createTeam, getAllTeams } = require('../controllers/teamController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/', protect, createTeam);
router.get('/', getAllTeams);

module.exports = router;