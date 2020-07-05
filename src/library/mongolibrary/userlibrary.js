require('dotenv').config();
const Promise = require('bluebird');
require('dotenv').config();
const Promise = require('bluebird');
const CryptoJS = require('crypto-js');

let simpleselect = function (user) {
    return new Promise((resolve, reject) => {
        let query = user.save();
        query.then()
    })
}


module.exports = {
    simple
}
