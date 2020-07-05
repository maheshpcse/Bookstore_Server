const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
    user_id: {
        type: Number
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    phonenumber: {
        type: String
    },
    role: {
        type: String
    },
    assigned_role: {
        type: String
    },
    desgination: {
        type: String
    },
    depertmenet: {
        type: String
    },
    profilepath: {
        type: String
    },
    uploadprofile: {
        type: String
    },
    status: {
        type: Boolean,
    },
    configure: {
        type: Boolean,
    },
    created_at: {
        type: Boolean,
    },
    updated_at: {
        type: Boolean,
    }
});
mongoose.model('User', userschema, 'users');

