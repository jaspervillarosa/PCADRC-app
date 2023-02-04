const mongoose = require("mongoose");


//create a schema
const signupSchema = {
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },

    lastName: {

        type: String,
        required: [true, "Last name is required"]
    },

    email: {

        type: String,
        required: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },

    confirmPassword: {

        type: String,
        required: [true, "confirm password is required"]
    },

}

const SignUp = mongoose.model("SignUp", signupSchema);

module.exports = SignUp;