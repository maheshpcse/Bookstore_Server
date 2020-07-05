require('dotenv').config();
const Promise = require('bluebird');
const CryptoJS = require('crypto-js');
const { response } = require('express');
const { reject } = require('bluebird');

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

let simpleselect = function (tableName, where) {
    return new Promise((resolve, reject) => {
        let query = tableName.where(where);
        query.findOne();
        query.then(result => {
            resolve(result);
        }).catch(error => {
            reject(error);
        })
    })
}

module.exports = {
    insertCollection,
    simpleselect
}
