var express = require('express');
var router = express.Router();
var config = require('../config/database');
var Question = require('../models/questionlist');


function Createtrivia($scope, $http){
    console.log('Hello from the controller');

$http.post('/createtrivia').success(function (response){
    console.log('I got the requested data');
    $scope.questionlist = response;
});    

}