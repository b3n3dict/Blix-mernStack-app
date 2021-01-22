
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'


// @desc fetch all products
// @route GET /api/products
// @access  public
const getProducts = asyncHandler(async(req,res)=>{
    // const pageSize = 2
    // const page = Number(req.query.pageNumber) || 1


    const keyword = req.query.keyword ? {
        name: {
            $regex: req.query.keyword,
            $options: 'i'
        } 
    }  : {}
    // const count = await Product.count({...keyword})
    const products = await Product.find({...keyword})
    // .limit(pageSize).skip(pageSize * (page -1))
   if(products == ''){
    res.status(404)
    throw new Error('Product not found!')
   }else{
    res.json(products)  /* page,pages:Math.ceil(count / pageSize) */
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


// @desc create a new review
// @route post /api/products/:id/reviews 
// @access  private
const createProductReview = asyncHandler(async(req,res)=>{
   const {
     rating,comment
    }= req.body
   const product = await Product.findById(req.params.id)

   if(product){
        const alreadyReviewed = product.reviews.find(r => r.user.toString() === req.user._id.toString())
      
        if(alreadyReviewed){
         res.status(400)
         throw new Error('Product already reviewed')
        }
        const review = {
            name:req.user.name,
            rating: Number(rating),
            comment,
            user:req.user._id
        }
        product.reviews.push(review)

        product.numReviews = product.reviews.length
        product.rating = product.reviews.reduce((acc,item)=> item.rating + acc,0)
        / product.reviews.length

        await product.save()
        res.status(201).json({message : "Review added"})
   }else{
        res.status(404)
        throw new Error("product not found")
   }

  const  updatedProduct = await product.save()
    res.status(201).json(updatedProduct)
 })

export { getProducts,getProductById,deleteProduct,updateProduct,createProduct,createProductReview }