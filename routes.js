const express = require('express');
const router = express.Router();
const dataB = require('./seed/data');
// const { User }  = require('./models/user');
// var auth = require('basic-auth')
// const User = require('./db/models/User').User;

////////////////// USER ROUTES ///////////////////////////

router.get('/users', (req, res)=>{
    // res.json({
    //     firstName: User.firstName,
    //     lastName: User.lastName,
    //     emailAddress: User.emailAddress,
    //     password: User.password
    // })
    //
    res.json(dataB.users)
    // res.json({
    //     firstName: dataB.users.emailAddress,
    //     lastName: dataB.users.lastName,
    //     emailAddress: dataB.users.emailAddress,
    //     password: dataB.users.password
    // });
    // set status
    res.status(200);
});


router.post('/users', (req, res)=>{

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