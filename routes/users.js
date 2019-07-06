const express = require('express');
const router = express.Router();
// const User = require("../models/user").User;
const { users } = require('../seed/data.json');
// const authenticateUser = require('./authenticate');
const auth = require('basic-auth');
const bcryptjs = require('bcryptjs');

const authenticateUser = (req, res, next) => {
    let message = null;
  
    // Parse the user's credentials from the Authorization header.
    const credentials = auth(req);
  
    // If the user's credentials are available...
    if (credentials) {
      // Attempt to retrieve the user from the data store
      // by their username (i.e. the user's "key"
      // from the Authorization header).
      const user = users.find(u => u.emailAddress === credentials.name);
  
      // If a user was successfully retrieved from the data store...
      if (user) {
        // Use the bcryptjs npm package to compare the user's password
        // (from the Authorization header) to the user's password
        // that was retrieved from the data store.
        const authenticated = bcryptjs
          .compareSync(credentials.pass, users.password);
  
        // If the passwords match...
        if (authenticated) {
          console.log(`Authentication successful for username: ${users.emailAddress}`);
  
          // Then store the retrieved user object on the request object
          // so any middleware functions that follow this middleware function
          // will have access to the user's information.
          req.currentUser = user;
        } else {
          message = `Authentication failure for username: ${users.emailAddress}`;
        }
      } else {
        message = `User not found for username: ${credentials.name}`;
      }
    } else {
      message = 'Auth header not found';
    }
  
    // If user authentication failed...
    if (message) {
      console.warn(message);
  
      // Return a response with a 401 Unauthorized HTTP status code.
      res.status(401).json({ message: 'Access Denied' });
    } else {
      // Or if user authentication succeeded...
      // Call the next() method.
      next();
    }
  };

////////////////// USER ROUTES ///////////////////////////

router.get('/users', authenticateUser, (req, res)=>{
    const user = users;

    res.json({
        firstName: user.firstName,
        lastName: user.lastName,
        emailAddress: user.emailAddress
    });
    // res.json(users)

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