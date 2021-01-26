import express from 'express';
const router = express.Router()
import {getProducts,getProductById, deleteProduct,updateProduct,createProduct, createProductReview} from '../controllers/productController.js'
import {admin, protect} from '../middleware/authMiddleware.js'

router.route('/').get(getProducts).post(protect,admin,createProduct)


router.route('/:id').get(getProductById).delete(protect,admin,deleteProduct).put(protect,admin,updateProduct)

router.route('/:id/reviews').post(protect,createProductReview)

export default router