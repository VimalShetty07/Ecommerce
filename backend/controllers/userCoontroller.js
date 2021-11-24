const ErrorHandler = require('../utils/errorhandler');
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken.js");



//For user registration


exports.registerUser = async (req, res , next)=> {
    const {name,email,password} = req.body;

    const user = await User.create({
        name,email,password,
        avatar:{
            public_id: "This is sample id",
            url:"profileurl"
        }
    });

    sendToken(user,201,res);
};

//For user login and
exports.loginUser = async (req, res , next)=> {
    const {email,password} = req.body;



//check if user have entered email and password
    if(!email || !password){
        return res.status(400).json({
            
            message: 'please enter email and password'
       });
    }


    const user = await User.findOne({email}).select("+password");

    if(!user){
        return res.status(401).json({
            
            message: 'Invalid Email or password'
       });
 
    }
    const isPasswordMatched = user.comparePassword(password);


    if(!isPasswordMatched){
        return res.status(401).json({
        message: 'Invalid Email or password'
       });
    }
    
    sendToken(user,200,res);

}