const express = require('express');
const router = express.Router();

const gravatar = require('gravatar');

const User = require('../../models/User');

// @route   POST api/users/register
// @desc    Registres user
// @access  Public

router.post('/register', (req, res) => {
    User.findOne({email: req.body.email})
        .then(user => {
            if(user){
                return res.status(400).json({
                    email: "A user with this email already exists"
                });
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    avatar: avatar,
                    password: req.body.password
              });  
            }
        })
})

module.exports = router;