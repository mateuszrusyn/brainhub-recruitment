const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SignupSchema = new Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator(v) {
                return /^[a-zA-Z][a-zA-Z .,'-]*$/.test(v);
            }
        }
    },
    surname: {
        type: String,
        required: true,
        validate: {
            validator(v) {
                return /^[a-zA-Z][a-zA-Z .,'-]*$/.test(v);
            }
        }
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator(v) {
                return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(v);
            }
        }
    },
    date: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('Signup', SignupSchema);