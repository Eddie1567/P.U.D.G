const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection')

const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT||8080

// log requests
app.use(morgan('tiny'));

//mongoDB connection
connectDB();

// parser request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs")

//load assets
app.use('/Css',express.static(path.resolve(__dirname,"assets/Css")))
app.use('/Img',express.static(path.resolve(__dirname,"assets/Img")))
app.use('/Js',express.static(path.resolve(__dirname,"assets/Js")))

// load router
app.use('/', require('./server/routes/router'))

app.listen(PORT,() => console.log(`Server is Running Mr.ZiaXdev on http://localhost:${PORT}`));