const mongoose = require('mongoose');
const users = require('users');
const userlibrary = require('../../library/mongolibrary/userlibrary');


module.exports.booksregister = async (request, response) => {
    var user = new users({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        phonenumber: req.body.phonenumber,
        role: req.body.role,
        assigned_role: req.body.assigned_role,
        desgination: req.body.desgination,
        depertmenet: req.body.depertmenet,
        profilepath: req.body.profilepath,
        uploadprofile: req.body.uploadprofile,
        status: req.body.status,
        configure: req.body.configure,
        created_at: new Date(),
        updated_at: new Date()
    })
    await userlibrary.simpleselect(user).then(resp => {
        response.status(200).json({
            status: 200,
            sucess: true,
            message: 'signup successfully',
            data: resp
        });
    }).catch(err => {
        response.status(200).json({
            status: 500,
            sucess: failed,
            message: 'signupfailed',
            data: null,
        })
    })


}

