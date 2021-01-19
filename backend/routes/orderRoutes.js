import express from 'express';
const router = express.Router()
import {addOrderItems,getMyOrders,getOrderById,getOrders,updateOrderToDeliver,updateOrderToPaid} from '../controllers/orderController.js'
import {admin, protect} from '../middleware/authMiddleware.js'

router.route('/').post(protect,addOrderItems).get(protect,admin,getOrders)

router.route('/myorders').get(protect,getMyOrders)

router.route('/:id').get(protect,getOrderById)

router.route('/:id/pay').put(protect,updateOrderToPaid)

router.route('/:id/deliver').put(protect,admin,updateOrderToDeliver)

export default router