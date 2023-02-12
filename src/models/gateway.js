const mongoose = require('mongoose');
const schema = mongoose.Schema;

const gateway = new Schema({
    serial: {type:String, required},
    name: {type:String, required},
    ipv4: {type:String, required},
    devices:{type:String, required},
},{
    collection:'gateways'
});

module.exports = mongoose.model('gateway', gateway)