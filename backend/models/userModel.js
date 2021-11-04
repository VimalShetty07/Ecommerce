const mongoose = require('mongoose');
const validator = require('validator');
const JWT = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
      
    name:{
        type: 'string',
        required: [true,"Please Enter your name"],
        maxLength:[30,"Name cannot exceed 30 characters"],
        minLength:[4,"Name should be at least 4 characters long"]
    },
    email: {
        type: 'string',
        required: [true,"Please Enter your Email"],
        unique: true,
        validate:[validator.isEmail,"Please Enter a valid Email address"]


    },
    password: {
        type: 'string',
        required: [true,"Please Enter your password"],
        minLength:[8,"Password should be at least 8 characters long"],
        select:false
    },
    avatar: {
        public_id:{
            type: 'string',
            required: true
        },
        url: {
            type: 'string',
            required: true
        }
    },
    role: {
        type: 'string',
        default: 'user'
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,

});

userSchema.pre("save",async function(next){

    if(!this.isModified("password")){
       next();
    }


       this.password = await bcrypt.hash(this.password,10);
});



userSchema.methods.getJWTToken = function(){
      return JWT.sign({id:this._id},process.env.JWT_SECRET,{
          expiresIn:process.env.JWT_EXPIRE,
      });

}


//compare password 
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

module.exports = mongoose.model("User",userSchema);