const express = require('express');
const router = express.Router();
const User = require("../models/user").User;
const { users } = require('../seed/data.json');

////////////////// USER ROUTES ///////////////////////////

router.get('/users', (req, res)=>{
    // res.json({
    //     firstName: User.firstName,
    //     lastName: User.lastName,
    //     emailAddress: User.emailAddress,
    //     password: User.password
    // })
    //
    res.json(users)
    // console.log(req)
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
    const newUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailAddress: req.body.emailAddress,
        password: req.body.password
    }
    User.create(newUser)
});

module.exports = router; 