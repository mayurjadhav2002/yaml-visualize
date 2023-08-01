const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    short_bio: {
        type: String,
        default: ''
    },
   
    image: {
        type: String,
        required: false,
        default: "avatar.png"
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    verification_token: {
        type: String,
        default: ''
    },
    password_reset_token:{
        type:String,
        default: ''
    },
    created_on: {
        type: Date,
        default: Date.now()
    }


}, { timestamps: true });


userSchema.method({
    async authenticate(password) {
        return bcrypt.compare(password, this.hash_password);
    },
});

module.exports = mongoose.model('User', userSchema);