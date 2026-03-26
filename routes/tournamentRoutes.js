const express = require('express');
const { createTournament, getAllTournaments } = require('../controllers/tournamentController');

const router = express.Router();

router.post('/', createTournament);
router.get('/', getAllTournaments);

module.exports = router;