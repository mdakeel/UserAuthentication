const express = require("express");
const connectiontoDB = require("./Config/ConnectionDb");
const UserModel = require("./Models/userModel");
const UserRoute = require("./Routes/UserRoute");
require("dotenv").config()

const app = express();
app.use(express.json());

app.get("/" ,(req, res) => {
    res.status(200).send({msg: "Server has been started", data:"Excited?"});
})

app.use("/user", UserRoute)

// Connection to DB
connectiontoDB();



app.listen(8081, () => {
    console.log("Server has started");
})