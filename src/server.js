
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const app = express()
// const mongoose = require('mongoose')


//routes
const gatewayRoutes = require('./routes/gateway') 

// mongoose.Promise = global.Promise
// mongoose.connect('mongodb://localhost/gateways',{
//     useMongoClient: true,
// }).then(()=>console.log('Connected to Mongo')).catch(error=>console.log(error))


//settings
app.set('port',process.env.PORT || 3000)


//middleware
app.use(bodyParser.json())
app.use(cors())


//static files
app.use(express.static(path.join(__dirname,'public')))
app.use('/gateway',gatewayRoutes)

app.listen(app.get('port'),()=>console.log('listening on port '+app.get('port'))) 