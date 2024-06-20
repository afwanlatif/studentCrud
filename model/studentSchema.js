const mongoose = require('mongoose');
const validator = require('validator');

// create userSchema

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw Error('not valid eamil');
            }
        }
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        minLength: 10,
        maxLenght: 10
    },
    gender: {
        type: String,
        required: true,

    },
    status: {
        type: String,
        enum: ['Active', 'In-Active'],
        default: 'Active'
    },
    datecreated: Date,
    dateUpdated: Date

});
// model define

const student = new mongoose.model('student', studentSchema);
module.exports = student;