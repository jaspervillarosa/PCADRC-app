const mongoose = require("mongoose");


//create a schema
const pestSchema = {
    pestName: {
        type: String,
        required: [true, "Pest name is required"]
    },

    scientificName: {

        type: String,
        required: [true, "Scientific name is required"]
    },

    cause: {

        type: String,
        required: [true, "Cause is required"]
    },

    remark: {

        type: String,
        required: [true, "Remark is required"]
    },

    management: {

        type: String,
        required: [true, "Management is required"]
    }
}

const Pest = mongoose.model("Pest", pestSchema);

module.exports = Pest;