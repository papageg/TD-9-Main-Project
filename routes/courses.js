const express = require('express');
const router = express.Router();
// var auth = require('basic-auth')
// const { courses } = require('../db/models/course');
// const { courses } = require('../seed/data');
const index = require('../db/index');


//////////////////////////////////////////////////////////
///////////////////// Course Routes //////////////////////

router.get('/courses', async (req, res)=>{
    //Returns a list of courses 
    //(including the user that owns each course)
    const courses = index.getCourses();
        res.json(courses);
    // res.json({       
    //         userId: req.userId,
    //         title: req.title,
    //         description: req.description,
    //         estimatedTime: req.estimatedTime,
    //         materialsNeeded: req.materialsNeeded
    // })
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