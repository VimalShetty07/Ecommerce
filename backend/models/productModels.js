const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: [true,"Please enter the product name"]
    },
    description:{
        type: 'string',
        required: [true,"Please enter the description"]
    },
    price:{
        type: 'number',
        required: [true,"Please enter the price"],
        maxLength:[8,"Price cannot exceed 8 charcters"]
    },
    rating:{
        type: 'number',
        default:0
    },
    image:[{
        public_id:{
            type: 'string',
            required: [true]
        },
        url:{
            type: 'string',
            required: [true]
        }
       }
     ],
    category:{
        type: 'string',
        required: [true,"Please enter the Product category"]
    },
    stock:{
        type: 'number',
        required: [true,"Please enter the Product stock"],
        maxLength:[4,"stoclk cannot exceed 4 characters"],
        default:1
    },
    numberofReviews:{
        type: 'number',
        default:0
    },
    revivews:[{
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
          },
        name: {
            type: 'string',
            required: [true]
        },
        rating:{
            type: 'number',
            required: [true]
        },
        comment:{
            type: 'string',
            required: [true]
        }
    }],

    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
    createdAt:{
        type: Date, 
        default :Date.now
    }


})
module.exports= mongoose.model("Product",productSchema);