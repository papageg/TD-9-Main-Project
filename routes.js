const express = require('express');
const router = express.Router();

var auth = require('basic-auth')


////////////////// USER ROUTES ///////////////////////////

router.get('/users', (req, res)=>{
    function check (name) {
        var valid = true
       
        // Simple method to prevent short-circut and use timing-safe compare
        valid = compare(name, req.body.firstName) && valid
        // valid = compare(pass, 'secret') && valid
       
        return valid
      }
      res.json(check);
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