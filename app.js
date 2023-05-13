const express = require('express')
const bodyparser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')


const connectDB = require('./server/database/connection')

const app = express()

dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 5000

// log requests
app.use(morgan('tiny'))

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }))

//mongoose link
connectDB();


//routes
app.use('/', require('./server/routes/customerroute'))
app.use('/', require('./server/routes/productroute'))


app.listen(PORT, () =>{
    console.log(`Server is Running at http://localhost:${PORT}`)
})