require('dotenv').config();
const Promise = require('bluebird');
const CryptoJS = require('crypto-js');

let insertCollection = function (tableName) {
    return new Promise((resolve, reject) => {
        let query = tableName.save();
        query.then(result => {
            resolve(result);
        }).catch(error => {
            reject(error);
        })
    })
}

let showCollection = function () {

}

module.exports = {
    insertCollection,
    showCollection
}
