const Product = require('../models/productModels');
const Apifeatures = require('../utils/apifeatures');

exports.createProduct = async (req, res, next) => {
     const product = await Product.create(req.body);

     res.status(201).json({
          success: true,
          product
     })

}

exports.getAllProducts = async (req, res)=> {

     const resultperpage = 5;
     const productCount = await Product.countDocuments();

     const apifeatures = new Apifeatures(Product.find(),req.query).search().filter().pagination(resultperpage);

     const products = await apifeatures.query;
     res.status(200).json({ 
          success: true,
          products,
          productCount 
     });

}



exports.getProductsDetails = async (req, res)=> {
     const product = await Product.findById(req.params.id);

     if(!product) {
          return res.status(500).json({
               sucess: false,
               message: 'Product not found'
          })
     }
     res.status(200).json({
          success: true,
          product
     });
}
    



exports.updateProducts = async (req, res,next)=>{
     let product = await Product.findById(req.params.id);
     if(!product){
          return res.status(500).json({
               success: false,
               message: 'Product not found'
          })
     }
     product = await Product.findByIdAndUpdate(req.params.id, req.body,{
          new:true,
          runValidators:true,
          useFindAndModify:false
          
     })

     res.status(200).json({
          success: true,
          product
     });
}

exports.deleteProduct = async(req, res, next) => {
     const product = await Product.findById(req.params.id);

     if(!product) {
          return res.status(500).json({
               sucess: false,
               message: 'Product not found'
          })
     }
     await product.remove();
     res.status(200).json({
          success: true,
          message: 'Product deleted successfully'
     })
}