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


// Logout User
exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});


// Forgot Password

exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHander("User not found", 404));
  }

  // Get ResetPassword Token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/password/reset/${resetToken}`;

  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

  try {
    await sendEmail({
      email: user.email,
      subject: `Ecommerce Password Recovery`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHander(error.message, 500));
  }
});