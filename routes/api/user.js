const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
// Load User model
const User = require("../../models/User");

// route - get request api/user/test
// desc - Test user route
// access - Public
router.get("/test", (req, res) =>
  res.json({
    msg: "Users Works"
  })
);

// route - get request  api/user/register
// desc - Register user
// access - Public
router.post("/register", (req, res) => {
//res.json({body: req.body});
  // use mongoose to find email if exist
   User.findOne({ email: req.body.email })
     //promise
     .then(user => {
       if (user) 
         return res.status(400).json({ email: "Email Already Registered" });
     console.log(req.body);
        bcrypt.genSalt(10, (err, salt) => {
         // console.log(salt);
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (err) return res.json(err);
            const newUser = new User({
              name: req.body.name,
              email: req.body.email,
              password: hash
            });
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
      });
       });
      });      

// route - get request  api/user/login
// desc - Login User / Returning JWT Token
// access - Public
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // find user by email
  User.findOne({ email }).then(user => {
    // Check for User
    if (!user) {
      return res.status(404).json({ email: "User Not Valid" });
    }
   // Check Password
   bcrypt.compare(password, user.password).then(matching => {
     if (matching) {
       //User Matched
        //res.json({ msg: "Varified" });
        const token = {
          id: user.id,
          name: user.name,
      //    avatar: user.avatar
        }; //Create JWT Token
        //Sign Token
        jwt.sign(
          token,
          keys.hiddenKey,
          { expiresIn: 7200 /* 2 hours */ },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res.status(400).json({ password: "Password Incorrect" });
      }
    });
  });
});

// route - get request  api/user/current
// desc - return token owner
// access - Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({ msg: "Success" });
  }
);

// Export Router
module.exports = router;