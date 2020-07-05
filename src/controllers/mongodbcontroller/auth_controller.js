const mongoose = require('mongoose');
const User = mongoose.model('User');
const userlibrary = require('../../library/mongolibrary/userlibrary');
const { response } = require('express');

// User signup API
module.exports.signup = (request, response) => {
    var user = new User({
        firstname: 'mohan',
        lastname: 'krishna',
        email: 'krishnamohanyedla@gmail.com',
        password: '1234',
        phonenumber: '8886197968',
        role: 'admin',
        desgination: 'Mean Stack Developer',
        depertmenet: 'IT/Software',
        status: 'Active',
        created_at: new Date(),
        updated_at: new Date()
    })
    userlibrary.insertCollection(user).then(resp => {
        response.status(200).json({
            status: 200,
            success: true,
            message: 'signup successfully',
            data: resp
        });
    }).catch(err => {
        response.status(200).json({
            status: 500,
            success: failed,
            message: 'signup failed',
            data: null,
        })
    })
}

module.exports.login = (req, res, next) => {
    var whereObj = {
        email: 'krishnamohanyedla@gmail.com',
        password: "1234"
    }
    userlibrary.simpleselect(User, whereObj).then(resp => {
        console.log('Login success');
        res.status(200).json({
            status: 200,
            success: true,
            message: 'Login successfully',
            data: resp
        });
    }).catch(err => {
        console.log('error',err);
        res.status(200).json({
            status: 500,
            success: false,
            message: 'login failed',
            data: null
        })
    })
}