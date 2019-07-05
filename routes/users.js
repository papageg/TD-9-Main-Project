const express = require('express');
const router = express.Router();
// const User = require("../models/user").User;
const { users } = require('../seed/data.json');

////////////////// USER ROUTES ///////////////////////////

router.get('/users', (req, res)=>{

    res.json(users)

    res.status(200);
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