require('dotenv').config();
const Promise = require('bluebird');
const CryptoJS = require('crypto-js');
const { response } = require('express');
const { reject, resolve } = require('bluebird');
const { promises } = require('fs');
const { result } = require('underscore');
// const { set } = require('mongoose');

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
let commonselectquery = function (tablename) {
    return new Promise((resolve, reject) => {
        let query = tablename.find();
        query.then(result => {
            resolve(result);
        }).catch(error => {
            reject(error); F
        })
    })
}

let updatecollection = function (tablename, updatedata) {
    return new Promise((resolve, reject) => {
        let query = tablename.updateMany({}, {$set: updatedata});
        // console.log('the update query',query);
        query.then(result => {
            resolve(result);
        }).catch(error => {
            reject(error);
        })
    })
}

module.exports = {
    insertCollection,
    simpleselect,
    commonselectquery,
    updatecollection
}

