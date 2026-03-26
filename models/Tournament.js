const mongoose = require('mongoose');

const TournamentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a tournament title'],
        trim: true,
        maxlength: [100, 'Tournament title cannot be more than 100 characters']
    },
    game: {
        type: String,
        default: 'Valorant',
        trim: true
    },
    prizePool: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ['Upcoming', 'Ongoing', 'Completed'],
        default: 'Upcoming'
    },
    participatingTeams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Tournament', TournamentSchema);