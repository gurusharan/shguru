var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');
var config = require('../config/database');
var User = require('../models/user');

//Register
router.post('/register',(req, res, next)=>{
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

  User.addUser(newUser, (err, user) => {
    if(err){
        res.json({success: false, msg:'failed to register user'});
    }
    else{
        res.json({success: true, msg:'User registered'});
    }
  });
});

//Authenticate
router.post('/authenticate',(req, res, next)=>{
    var username = req.body.username;
    var password = req.body.password;

    User.getUserByUsername(username, (err, user)=>{
        if(err) throw error;
        if(!user){
            return res.json({success: false, msg:'User not found'});
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                var token = jwt.sign(user, config.secret, {
                    expiresIn: 604800 // seconds in a week 
                });

                res.json({
                    success: true,
                    token: 'JWT '+ token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            } else {
                return res.json({success: false, msg:'Wrong password'});
            }
        }); 
    });
});

//Profile
router.get('/profile', passport.authenticate('jwt', {session:false}) ,(req, res, next)=>{
    res.json({user: req.user});
});


module.exports = router;