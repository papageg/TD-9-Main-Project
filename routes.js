const express = require('express');
const router = express.Router();
const User = require("./db/models/user").User;
var auth = require('basic-auth')
var compare = require('tsscmp')


////////////////// USER ROUTES ///////////////////////////

router.get('/users', (req, res)=>{
        var credentials = auth(req)
       
        // Check credentials
        // The "check" function will typically be against your user store
        if (!credentials || !check(credentials.name, credentials.pass)) {
          res.statusCode = 401
          res.setHeader('WWW-Authenticate', 'Basic realm="example"')
          res.end('Access denied')
        } else {
          res.end('Access granted')
        }
      
       
      // Basic function to validate credentials for example
      function check (name, pass) {
        var valid = true
       
        // Simple method to prevent short-circut and use timing-safe compare
        valid = compare(name, req.body.emailAdress) && valid
        valid = compare(pass, req.body.password) && valid
       
        return valid
      }
});

router.post('/users', function (req, res){
    //Creates a user, sets the Location header 
    //to "/", and returns no content
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailAdress: req.body.emailAdress,
        password: req.body.password
      }).then(() => {
        res.location('/');
        res.status(201).end();
    }).catch(error => {
        error.status = 400;
        next(error);
    });

});

//////////////////////////////////////////////////////////
///////////////////// Course Routes //////////////////////

router.get('/courses', async (req, res)=>{
    //Returns a list of courses 
    //(including the user that owns each course)
});

router.get('/courses/:id', async (req, res)=>{
    //Returns a the course 
    //(including the user that owns the course) 
    //for the provided course ID
});

router.post('/courses', async (req, res)=>{
    //Creates a course, sets the Location header to 
    //the URI for the course, and returns no content
});

router.put('/courses/:id', async (req, res)=>{
    //Updates a course and returns no content
});

router.delete('/courses/:id', async (req, res)=>{
    //Deletes a course and returns no content
});

module.exports = router; 