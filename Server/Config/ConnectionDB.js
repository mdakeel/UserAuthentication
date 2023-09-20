
const mongoose = require("mongoose");

// Connectin db to mongodb
const connectiontoDB = () => {
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mernstackproject.4whqvz2.mongodb.net/`)
    .then((res) => {
        console.log("DB Connected to ",res.connection.host)
    }).catch((err)=> {
        console.log("Error while connecting to DB", err.message)
    })
}

module.exports = connectiontoDB