const mongoose = require('mongoose');
const User = mongoose.model('User');
const userlibrary = require('../../library/mongolibrary/userlibrary');


// User signup API
module.exports.signup = (request, response) => {
    console.log('the request is the',request.body);
    var user = new User({
        firstname: request.body.firstname,
        lastname: request.body.lastname,
        email: request.body.email,
        password: request.body.password,
        phonenumber: request.body.phonenumber,
       // role: request.body.role,
        desgination: request.body.desgination,
        depertmenet: request.body.depertmenet,
        status: request.body.status,
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
        console.log('error', err);
        res.status(200).json({
            status: 500,
            success: false,
            message: 'login failed',
            data: null
        })
    })
}