const mongoose = require("mongoose");


//create a schema
const farmerSchema = {
    farmerName: {
        type: String,
        required: [true, "Pest name is required"]
    },

    address: {

        type: String,
        required: [true, "Scientific name is required"]
    },

    companyName: {

        type: String,
        required: [true, "Cause is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },

    password: {

        type: String,
        required: [true, "Remark is required"]
    },

    mobileNumber: {

        type: String,
        required: [true, "Management is required"]
    }
}

const Farmer = mongoose.model("Farmer", farmerSchema);

module.exports = Farmer;