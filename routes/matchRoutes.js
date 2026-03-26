const express = require('express');
const { scheduleMatch, updateScore, getAllMatches } = require('../controllers/matchController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/', protect, scheduleMatch);
router.put('/:id/score', protect, updateScore);
router.get('/', getAllMatches);

module.exports = router;