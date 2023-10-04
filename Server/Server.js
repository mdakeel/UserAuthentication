const express = require("express");
const connectiontoDB = require("./Config/ConnectionDb");
const UserModel = require("./Models/userModel");
const UserRoute = require("./Routes/UserRoute");
require("dotenv").config()
const cors = require("cors")

const app = express();
app.use(express.json());

app.use(cors())

app.get("/" ,(req, res) => {
    res.status(200).send({msg: "Server has been started", data:"Excited?"});
})

app.post('/register', (req, res) => {
    console.log(req.body);
    res.json({status: 'ok'})
})

app.use("/user", UserRoute)

// Connection to DB 
connectiontoDB();

app.listen(8082, () => {
    console.log("Server has started");
})