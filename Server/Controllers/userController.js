const UserModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// to register user
exports.registerUser =   async(req, res) =>{
    const {email, password, name} = req.body;
    if(!email || !password || !name) return res.status(404).send({msg: "All input field are required"});

    try {
        const hashedPassword = await bcrypt.hash(password, 12) // to hash password
        const newUser = await UserModel({...req.body, password:hashedPassword});

        await newUser.save();
        res.status(200).send({msg:"User Registerd Succesfully"});

    } catch (error) {
        res.status(501).send({msg:error.message});
    }
}

// to login user
exports.loginUser =   async(req, res) =>{
    const {email, password} = req.body;
    if(!email || !password) return res.status(404).send({msg: "All input are required"});

    try {
        const userData = await UserModel.findOne({email});
        const result = await bcrypt.compare(password, userDate.password)

        if(result){
            const token = jwt.sign({userId:userData._id},process.env.JWT_SECRET_KEY,{
                expiresIn:'24h'
            });
            res.status(200).send({msg:"You are Login Succesfully",token});
        }else{
            res.status(404).send({msg:"Worng Password"});
        }
       
    } catch (error) {
        res.status(501).send({msg:error.message});
    }
}

// to get userdetails/ convert jwt token
exports.getUserDetails =   async(req, res) =>{
    const {token} = req.body
    try {
        const {userID} = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const userDetails = await UserModel.findOne({_id:userID});
        res.status(200).send(userDetails);

    } catch (error) {
        res.status(501).send({msg: "Authantication Faild"});
    }
}