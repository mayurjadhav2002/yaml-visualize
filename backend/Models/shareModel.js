const mongoose = require('mongoose');

const shareIdSchema = mongoose.Schema({
    origin_url: {
        type: String,
        required: true
    },
    shortID: {
        type: String,
        required: true
    },
    
    created_on: {
        type: Date,
        default: Date.now()
    }


}, { timestamps: true });




module.exports = mongoose.model('ShareID', shareIdSchema);