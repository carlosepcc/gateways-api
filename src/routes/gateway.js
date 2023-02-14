const express = require("express")
const Gateway = require('../models/Gateway')

let mockGateways = [{serial:'1'},{serial:'2'},{serial:'3'}]
const router = express.Router()
router.get('/',(req,res)=>{
    res.json(mockGateways);
})

router.post('/',(req,res)=>{
mockGateways.push(req.body)
res.status(200).json(req.body)
});

router.put('/:serial',(req,res,next)=>{
mockGateways[mockGateways.indexOf(req.params.serial)]=req.body
res.status(200).json(req.body)
})

router.delete('/:serial',(req,res,next)=>{
    mockGateways.splice(mockGateways.indexOf(rew.params.serial),1)
    res.status(200).json('Deleted successfully')
});
module.exports = router  