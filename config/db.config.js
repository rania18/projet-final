const mongoose = require('mongoose')
require('dotenv').config()
const ConnectDB = () =>{
    mongoose.connect(process.env.URI, (err) =>{
        if (err){
            throw err
        }
        console.log("connected...")
    } )
}

module.exports .