const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a team name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Team name cannot be more than 50 characters']
    },
    captain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide a team captain']
    },
    players: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
});

// Validate that players array doesn't exceed 5 (for Valorant 5-man roster)
TeamSchema.pre('save', function(next) {
    if (this.players && this.players.length > 5) {
        throw new Error('Team roster cannot exceed 5 players for Valorant');
    }
    next();
});

module.exports = mongoose.model('Team', TeamSchema);