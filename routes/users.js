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

});

//Authenticate
router.post('/authenticate',(req, res, next)=>{
    var username = req.body.username;
    var password = req.body.password;


});

//Profile
router.get('/profile', passport.authenticate('jwt', {session:false}) ,(req, res, next)=>{
    res.json({user: req.user});
});


module.exports = router;