const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Gateway = new Schema({
    serial: {type:String, required:true},
    name: {type:String, required:true},
    ipv4: {type:String, required:true},
    devices:{type:String, required:true},
},{
    collection:'gateways'
});

module.exports = mongoose.model('Gateway', Gateway)