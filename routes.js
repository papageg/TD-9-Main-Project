const express = require('express');
const router = express.Router();
const User = require("./db/models/user").User;
var auth = require('basic-auth')
// var compare = require('tsscmp')

const authenticateUser = (req, res, next) =>{
    let message = null;

    // Parse the user's credentials from the Authorization header.
    const credentials = auth(req);
  
    // If the user's credentials are available...
    if (credentials) {
      // Attempt to retrieve the user from the data store
      // by their username (i.e. the user's "key"
      // from the Authorization header).
      const user = users.find(u => u.username === credentials.name);
  
      // If a user was successfully retrieved from the data store...
      if (user) {
        // Use the bcryptjs npm package to compare the user's password
        // (from the Authorization header) to the user's password
        // that was retrieved from the data store.
        const authenticated = bcryptjs
          .compareSync(credentials.pass, user.password);
  
        // If the passwords match...
        if (authenticated) {
          console.log(`Authentication successful for username: ${user.username}`);
  
          // Then store the retrieved user object on the request object
          // so any middleware functions that follow this middleware function
          // will have access to the user's information.
          req.currentUser = user;
        } else {
          message = `Authentication failure for username: ${user.username}`;
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
  }
////////////////// USER ROUTES ///////////////////////////

router.get('/users', authenticateUser, (req, res)=>{
    const user = req.currentUser;

    res.json({
        firstName: user.firstName,
        lastName: user.lastName,
        emailAdress: user.emailAdress,
        password: user.password
    });
});

router.post('/users', function (req, res){
    //Creates a user, sets the Location header 
    //to "/", and returns no content
    User.create({
        firstName: User.firstName,
        lastName: User.lastName,
        emailAdress: User.emailAdress,
        password: User.password
      }).then(() => {
        res.location('/');
        res.status(201).end();
    }).catch(error => {
        error.status = 400;
        next(error);
    });

});

// var credentials = auth(req)
       
// // Check credentials
// // The "check" function will typically be against your user store
// if (!credentials || !check(credentials.name, credentials.pass)) {
//   res.statusCode = 401
//   res.setHeader('WWW-Authenticate', 'Basic realm="example"')
//   res.end('Access denied')
// } else {
//   res.end('Access granted')
// }


// // Basic function to validate credentials for example
// function check (name, pass) {
// var valid = true

// // Simple method to prevent short-circut and use timing-safe compare
// valid = compare(name, req.body.emailAdress) && valid
// valid = compare(pass, req.body.password) && valid

// return valid
// }

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