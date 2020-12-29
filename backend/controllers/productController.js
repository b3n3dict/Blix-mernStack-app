
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'


// @desc fetch all products
// @route GET /api/products
// @access  public
const getProducts = asyncHandler(async(req,res)=>{
    const products = await Product.find({})
  
    res.json(products)
})

// @desc fetch single product
// @route GET /api/products/:id
// @access  public
const getProductById = asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id)
    if(product){
        res.json(product)
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
  
})

// @desc delete a product 
// @route DELETE /api/products/:id
// @access  private/admin
const deleteProduct = asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id)
    if(product){
        await product.remove()
        res.send({message:'Product Removed'})
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
  
})

export { getProducts,getProductById,deleteProduct }