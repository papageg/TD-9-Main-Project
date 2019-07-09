const express = require('express');
const router = express.Router();
const { users } = require('../seed/data.json');
const authenticateUser = require("./authenticate");
// const User = require("../models").User;
// const authenticate = require("./authenticate");
// const bcryptjs = require('bcryptjs');

// const { models } = require('./db');
// const { User, Course } = models;

////////////////// USER ROUTES ///////////////////////////

router.get('/users', authenticateUser, (req, res)=>{
    const user = req.currentUser;

    res.json({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        emailAddress: user.emailAddress
        // password: user.password
    }).status(200);
    // res.json(users)

});


router.post('/users', (req, res)=>{
    users.push(req.body);
    // Set the status to 201 Created and end the response.
return res.status(201).end();
    // const newUser = {
    //     firstName: req.body.firstName,
    //     lastName: req.body.lastName,
    //     emailAddress: req.body.emailAddress,
    //     password: req.body.password
    // }
    // createUsers(newUser)
});

module.exports = router; 