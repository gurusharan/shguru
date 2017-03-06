var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var mongoose = require('mongoose');
var mongojs = require('mongojs');
var config = require('./config/database');

//Connect to Database
mongoose.connect(config.database);

//On Connection
mongoose.connection.on('connected', () => {
    console.log('connected to database'+ config.database);
});

//On Error
mongoose.connection.on('error', (err) => {
    console.log('database error'+ err);
});

//Initializing express
var app = express();

//Accessing users from routes folder
var users = require('./routes/users');
 
//Port Number
var port = 3000;

//CORS Middleware
app.use(cors());

//Set Static Folder for Angular
app.use(express.static(path.join(__dirname, 'public'))); 

//Body parser Middleware
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//path for user routes
app.use('/users', users);

//Index Route
app.get('/',(req, res)=>{
    res.send('Invalid endpoint');
});

//For all other routes other than defined
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//add trivia questions to database
app.get('/createtrivia', function(req, res){
    console.log("I received a get request");
    //res.json(createtrivia);
});

//Start Server
app.listen(port, function(req, res){
    console.log('server started on port' + port);
})