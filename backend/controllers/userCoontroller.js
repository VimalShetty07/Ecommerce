const ErrorHandler = require('../utils/errorhandler');
const User = require("../models/userModel");



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

const token = user.getJWTToken();

    res.status(201).json({
        success:true,
        token
    });
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
    
    const token = user.getJWTToken();

    res.status(200).json({
        success:true,
        token
    });

}