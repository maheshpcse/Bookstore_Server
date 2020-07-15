const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');
var userlibrary = require('../../library/mongolibrary/userlibrary');
var config = require('../../config/config.js');

// User signup API
module.exports.signup = async (request, response) => {
    console.log('the request is the', request.body);
    var user = new User({
        firstname: request.body.firstname,
        lastname: request.body.lastname,
        username: request.body.username,
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
    await userlibrary.emailverification(User, { email: `${request.body.email}` }).then(async result => {
        console.log('the result data is theeeeeee', result);
        if (result.email == request.body.email) {
            return response.status(200).json({
                statusCode: 200,
                success: true,
                message: 'email is alredy exist',
                data: null
            })
        }
        await userlibrary.insertCollection(user).then(resp => {
            response.status(200).json({
                statusCode: 200,
                success: true,
                message: 'signup successfully',
                data: resp
            });
        }).catch(err => {
            console.log('the error is theeeee', err);
            response.status(200).json({
                statusCode: 500,
                success: failed,
                message: 'signup failed',
                data: null,
            })
        })
    })
}

// User login API
module.exports.login = (request, response, next) => {
    console.log('the login id is theeeeeeee', request.body);
    var whereObj = {
        username: request.body.username,
        password: request.body.password
    }
    console.log('the login id is theeeeeeee', whereObj);
    userlibrary.simpleselectlogin(User, whereObj).then(resp => {
        if (resp == null) {
            return response.status(200).json({
                statusCode: 404,
                success: false,
            })
        } else {
            var token = jwt.sign({
                username: resp.username,
                email: resp.email
            },config.database.securitykey, {
                expiresIn: '24h'
            });
            response.status(200).json({
                statusCode: 200,
                success: true,
                data: resp,
                token: token
            })
        }
    }).catch(err => {
        console.log('error', err);
        response.status(200).json({
            statusCode: 500,
            success: false,
            message: 'login failed',
            data: null
        })
    })
}
