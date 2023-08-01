const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// jwt token generation, whenever user sign in this token will be send.
const token_generation = async (id) => {
    try {
        const token = await jwt.sign({ _id: id }, process.env.JWT_SECRET_KEY);
        return token;

    } catch (error) {
        res.status(400).send({ msg: "error in token generation" })
    }
}

// Password Encryption
const password_encrypt = async (password) => {
    try {
        const new_password = await bcrypt.hash(password, 10);
        return new_password;

    } catch (error) {
        res.status(400).send(error.message)
    }
}

// User registration
const register_new_user = async (req, res) => {
    try {
        // Checking whether use with given email already exists or not
        const userExists = await User.findOne({ email: req.body.email });
        if (userExists) {
            res.send({ msg: "User With this email already exists" });
        } else {
            const encrypt_pass = await password_encrypt(req.body.password);
            const user = new User({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: encrypt_pass,
            });
            const data = await user.save();
            if (data) { res.status(201).send({ success: true, msg: "New Account Created" }) }
            else {
                res.status(400).send({ success: false, msg: "Error in Creating the account" });
            }
        }

    } catch (error) {
        res.status(500).send({ success: false, msg: "Internal Error Occurred" })
    }
}

const signin = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    // Check whether the user exists or not
    const user = await User.findOne({ email: email });
    if (user) {
        try {
            // If user Exists
            const password_Verify = await bcrypt.compare(password, user.password);
            if (password_Verify) {
                const token = await token_generation(user._id);
                const userAccount = {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    age: user.age,
                    password: user.password,
                    role: user.role,
                    token: token
                
                };
                res.status(200).send({success: true, data: userAccount});


            } else {
                res.status(406).send({success:false, msg: `Incorrect Login Credentials` });
            }

        } catch (error) {
            res.status(500).send({success:false, msg:"Failed to load, some errored occured"});
        }
    } else {
        res.status(400).send({success:false, msg: "User Not exists" })
    }

}

module.exports = {register_new_user, signin}