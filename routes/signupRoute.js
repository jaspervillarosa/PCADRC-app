const express = require('express');
const router = express.Router();
const SignUp = require("../models/signupModel");

router.route('/signup').post((req, res) =>{

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    const newSignup = new SignUp({
        firstName,
        lastName,
        email,
        password,
        confirmPassword
    })

    newSignup.save();
})

router.route("/admin").get((req, res) =>{
   SignUp.find()
        .then(foundUser => res.json(foundUser))
})

module.exports = router;