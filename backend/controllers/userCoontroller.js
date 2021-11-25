const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsynchError");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");



// Register a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  

  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "pp",
      url:"j"
    },
  });

  sendToken(user, 201, res);
});

// Login User
exports.loginUser = catchAsyncErrors(async(req, res, next)=>{
  const {email, password} = req.body;

  //check passwordKey

  if(!password || !email) {
    return next(new ErrorHandler("Please Enter Email or Password",400))
  }

  const user = await User.findOne({email}).select("+password");

  if(!user) {
    return next(new ErrorHandler("Invalid Email or Password",401))
  }

  const isPasswordMatch = user.comparePassword(password);

  if(!isPasswordMatch) {
    return next(new ErrorHandler("Invalid Email or Password",401))
  }

  sendToken(user,200,res)


});