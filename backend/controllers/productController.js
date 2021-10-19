const Product = require('../models/productModels');

exports.createProduct = async (req, res, next) => {
     const product = await Product.create(req.body);

     res.status(201).json({
          success: true,
          product
     })

}

exports.getAllProducts = async (req, res)=> {
     const products = await Product.find();
     res.status(200).json({ 
          success: true,
          products 
     });

}


exports.updateProducts = async (req, res)=>{
     let products = await Product.findById(req.body.id);
     if(!products){
          return res.status(500).json({
               success: false,
               message: 'Product not found'
          })
     }
     product = await Product.findByIdAndUpdate(req.params.id, req.body,{
          new:true,
          runValidators:true,
          useFindAndModify:false,
          useFindAndModify:false
     })

     res.status(200).json({
          success: true,
          product
     })
}