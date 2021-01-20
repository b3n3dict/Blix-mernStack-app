
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'


// @desc fetch all products
// @route GET /api/products
// @access  public
const getProducts = asyncHandler(async(req,res)=>{
    const keyword = req.query.keyword ? {
        name: {
            $regex: req.query.keyword,
            $options: 'i'
        } 
    }  : {}
    const products = await Product.find({...keyword})
   if(products == ''){
    res.status(404)
    throw new Error('Product not found')
   }else{
    res.json(products)
   }
    
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

// @desc create a product 
// @route POST /api/products
// @access  private/admin
const createProduct = asyncHandler(async(req,res)=>{
   const product = new Product({
       name: "Sample Name",
       price : 0,
       user: req.user._id,
       image : "/images/sample.png",
       brand: "Sample Brand",
       category : "Sample category",
       countInStock: 0,
       numReviews : 0,
       description : 'Sample description'
   })
 const  createdProduct = await product.save()
   res.status(201).json(createdProduct)
})


// @desc update a product 
// @route PUT /api/products/:id
// @access  private/admin
const updateProduct = asyncHandler(async(req,res)=>{
   const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock
    }= req.body
   const product = await Product.findById(req.params.id)

   if(product){
         product.name = name
         product.price = price
         product.description = description
         product.image = image
         product.brand = brand
         product.category = category
         product.countInStock = countInStock
        
   }else{
        res.status(404)
        throw new Error("product not found")
   }

  const  updatedProduct = await product.save()
    res.status(201).json(updatedProduct)
 })

export { getProducts,getProductById,deleteProduct,updateProduct,createProduct }