# shguru
Trivia Game Web application

1) The application is developed using MEAN stack.
Express Backend - A rock solid Node.js/Express server using Mongoose to organize models and query the database.
Angular-CLI to generate components, services and more.
JWT tokens - For a full featured authentication using JSON web tokens. Login and store user data.

2) Set Up: 
MongoDB - https://www.mongodb.com/download-center?jmp=docs&_ga=1.123382667.1683396969.1488397893#community
ExpressJS - https://expressjs.com/ (npm install express --save)
Angular2 - https://cli.angular.io/ https://github.com/angular/quickstart https://angular.io/docs/ts/latest/guide/setup.html
NodeJS - https://nodejs.org/en/download/

3) Dependencies:
(i)Body-Parser to parse incoming request bodies in a middleware before the handlers, available under the req.body property.
(ii)CORS middleware for dynamically or statically enabling CORS in express/connect applications, routing.
(iii)Passport-JWT a passport strategy for authenticating with a JSON Web Token.This module lets you authenticate endpoints using a JSON web token. It is intended to be used to secure RESTful endpoints without sessions.
(iv)MongooseJS provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.
(v)bcrypt lib to help with hashing passwords.

4) ServiceModules:
(i)AuthService, an authentication service to check if user is logged In. 
(ii)FlashMessagesService, a simple module that provides component and service for showing flash messages.
(iii)ValidateService, in order to check if the user is registered and if whether a valid email id is entered/registered.
(iv)AuthGuard, to check if register, login fields are hidden once a user logs in.
(V)Bootswatch https://bootswatch.com/sandstone/bootstrap.min.css for styling purpose.
(vi)Postman, a chrome add-on, a tool to build, test and document the api's in a easy and faster way.
(vii)Nodemon, for automatic restarting of application and updating changes.

5) Application Working:
(i) A user can only access the application once he is registered. Register and Login options are provided on the home page.
(ii) Once the user has registered with his name, username, email and password, he is taken to his dashboard page.
(iii) A registered user can directly login with his username and password and has access to his profile, dashboard.
(iv) On the dashboard, each logged in user is offered 3 options to choose from a)Create a trivia question, b)Answer few trivia questions,
c)View high scores of users.
(v)The application data till this step is persistent with the backend database and works accordingly.
(vi)When a user chooses to create a trivia question, he is taken to that page where he is given the options of entering his question,
category to which it belongs and the difficulty level with an option to add it(needs work-up on the functionality).
(vii)When a user chooses to answer a trivia question, he is taken to that page where he is given a set of questions with their category type, difficulty level and an option to enter the answer of each question next to it(needs work-up on the functionality).
(viii)View high scores of users were out of scope based on the status of my current project implementation.(Not implemented) 
(ix)ports used on localhost for angular - http://localhost:4200/ for node - http://localhost:3000/ for mongo http://localhost:27017/

6) Todo:
(i)Fix the createtrivia page functionality and make it persistent with the database. Add update, edit, clear features to enhance usage.
(ii)Make the answer trivia page functionality responsive and add some ajax feature to populate the user response with correct/wrong answer
options, and adding redirect features, along with a rating/points based evaluation to determine competitiveness.
(iii)Implement user stats, ranking system through a scoreboard style feature and a live update feature(can be implemented using ajax).

7) Testing:
(i)Angular2 supports/offers jasmine and karma modules for unit testing. ## Running unit tests (ii)Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).## Running end-to-end tests (iii)Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).Before running the tests make sure you are serving the app via `ng serve`.

8) Observations:
(i)Angular2JS is a major upgrade from AngularJS. At first the angular2JS seemed quite easy and some of the drawbacks, confusions caused by
AngularJS were rectified in the Angular2JS version. 
(ii)Angular-CLI is a very handy tool and creation of components has never been easy as I have seen from earlier/past frameworks I have used.
(iii)Angular2 uses type script instead of javascript. Typescript gets compiled internally as javascript. While this helps the developers a great deal while using a particular framework for long time and who are building apps with similar features on a regular basis; for someone who has just started to use typescript may find it wonderful and strange at the same time.
(iv)I had similar issues while trying to use javascript in/with typescript, as the set-up and usage of $scope variables, functions, components, templates within .js file and binding structure has differed greatly from the earlier(old) version of angularJS.
(v)The best part about angular-cli is easing the component creation and the offering of .spec.ts files along with it, which eases the amount of time it takes to write test cases and find bugs easily.
(vi)I tried to implement jquery based ajax call implementation with type-script but couldn't get it working as type-script works or behaves differently than a regular javascript file. I have to do more research on type-script and work more with it to get it familiarized.
(vii)Jasmine and Karma modules seem very reliable unit testing tools and with larger applications they can be a very huge asset while writing test cases and performing unit testing.

9) Conclusion:
(i)While there are infinite number of ways to develop this application, I chose a way which I thought will be the best way to implement it. It is a great learning experience and working on this project was really interesting and challenging at the same time.
(ii)Take aways - a)Learnt a bit of angular2, b)Used type-script for the first time, c)used angular-cli for the first time, d)Used and learnt a little bit about unit-testing in angular and used jasmine, karma for the first-time, e)Got to work on a very fun and challegning project. 
THANK YOU
