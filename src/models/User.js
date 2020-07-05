const mongoose = require('mongoose');
const userschema = mongoose.Schema({
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
        type: String
    },
    configure: {
        type: Boolean
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date
    }
});

mongoose.model('User', userschema, 'users');