const express = require('express');
const router = express.Router();

//var course = require("./course");
// const records = require('./records');

////////////////// USER ROUTES ///////////////////////////

router.get('/users', async (req, res)=>{
    //Return the currently authenticated user
    res.json("Hi")
    //1 
    // const user = req.body
});

router.post('/users', async (req, res)=>{
    //Creates a user, sets the Location header 
    //to "/", and returns no content
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