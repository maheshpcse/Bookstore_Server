require('dotenv').config();
const Promise = require('bluebird');

let simpleselect = function (user) {
    return new Promise((resolve, reject) => {
        let query = user.save();
        query.then(result => {
            resolve(result)
        }).catch(err => {
            reject(err);
        })
    })
}


module.exports = {
    simpleselect
}
