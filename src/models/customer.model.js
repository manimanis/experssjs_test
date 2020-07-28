let mongoose = require('mongoose');

const server = '127.0.0.1:27017';
const database = 'rest-api-workshop';
const user = 'abdou';
const password = 'abdou';

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}?authSource=admin&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false`);

let CustomerSchema = new mongoose.Schema({
    name: String,
    email:{
        type: String,
        require: true,
        unique: true
    }
});

module.exports = mongoose.model('Customer', CustomerSchema);