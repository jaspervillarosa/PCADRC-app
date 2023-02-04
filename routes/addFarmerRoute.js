const express = require('express');
const router = express.Router();
const Farmer = require("../models/addFarmerModel");

router.route('/add-disease').post((req, res) =>{

    const farmerName = req.body.farmerName;
    const address = req.body.address;
    const companyName = req.body.companyName;
    const email = req.body.email;
    const password = req.body.password;
    const mobileNumber = req.body.mobileNumber;

    const newFarmer = new Farmer({
        farmerName,
        address,
        companyName,
        email,
        password,
        mobileNumber
    })

    newFarmer.save();
})

router.route("/admin").get((req, res) =>{
   Farmer.find()
        .then(foundFarmer => res.json(foundFarmer))
})

module.exports = router;