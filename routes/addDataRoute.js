const express = require('express');
const router = express.Router();
const Pest = require("../models/addDataModel");


router.route("/add-data").post((req, res) =>{
    const pestName = req.body.pestName;
    const scientificName = req.body.scientificName;
    const cause = req.body.cause;
    const remark = req.body.remark;
    const management = req.body.management;

    const newPest = new Pest({
        pestName,
        scientificName,
        cause,
        remark,
        management
    })

    newPest.save();

})

router.route("/admin").get((req, res)=>{
    Pest.find()
        .then(foundPest => res.json(foundPest));
})
module.exports = router;