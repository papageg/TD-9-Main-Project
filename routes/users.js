'use strict';

const express = require('express');
const router = express.Router();
// const { sequelize, models } = require('../db');
// const { User, Course } = models;
const authenticate = require('./authenticate');


const users = [];
////////////////// USER ROUTES ///////////////////////////

router.get('/users', authenticate, (req, res)=>{
    

    res.json(req.currentUser).status(200);


});


router.post('/users', (req, res)=>{
    // Get the user from the request body.
    const user = req.body;

    const errors = [];

    // Validate that we have a `name` value.
    if (!user.firstName) {
        errors.push('Please provide a value for "First Name"');
    }
    
      // Validate that we have an `email` value.
    if (!user.lastName) {
        errors.push('Please provide a value for "Last Name"');
    }

    // Validate that we have a `name` value.
    if (!user.emailAddress) {
        errors.push('Please provide a value for "Email Address"');
    }
    
        // Validate that we have an `email` value.
    if (!user.password) {
        errors.push('Please provide a value for "password"');
    }

        // If there are any errors...
    if (errors.length > 0) {
        // Return the validation errors to the client.
        res.status(400).json({ errors });
    } else {
        // Add the user to the `users` array.
        users.push(user);
    
        // Set the status to 201 Created and end the response.
        res.status(201).end();
    }

    // Add the user to the `users` array.
    users.push(user);

    // Set the status to 201 Created and end the response.
    return res.status(201).end();
});

module.exports = router; 