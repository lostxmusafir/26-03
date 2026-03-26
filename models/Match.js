const mongoose = require('mongoose');

const MatchSchema = new mongoose.Schema({
    tournament: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tournament',
        required: [true, 'Please provide a tournament']
    },
    teamA: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: [true, 'Please provide Team A']
    },
    teamB: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: [true, 'Please provide Team B']
    },
    winner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        default: null
    },
    score: {
        teamA_score: {
            type: Number,
            default: 0
        },
        teamB_score: {
            type: Number,
            default: 0
        }
    },
    status: {
        type: String,
        enum: ['Scheduled', 'Live', 'Completed'],
        default: 'Scheduled'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Match', MatchSchema);