const mongoose = require('mongoose');
var User = mongoose.model('User');
var userlibrary = require('../../library/mongolibrary/userlibrary.js');

// User signup API
module.exports.booksregister = (request, response) => {
    var user = new User({
        firstname: 'Pachapalam',
        lastname: 'Mahesh',
        email: 'mahesh599@gmail.com',
        password: '1234',
        phonenumber: '8886197968',
        role: 'admin',
        desgination: 'Mean Stack Developer',
        depertmenet: 'IT/Software',
        status: 'Active',
        created_at: new Date(),
        updated_at: new Date()
    });
    userlibrary.insertCollection(user).then(resp => {
        console.log('response is', resp);
        response.status(200).json({
            status: 200,
            success: true,
            message: 'signup successfully',
            data: resp
        });
    }).catch(err => {
        console.log('error while signup', err);
        response.status(200).json({
            status: 500,
            success: false,
            message: 'signup failed',
            data: null
        })
    })
}