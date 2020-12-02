
import Order from '../models/orderModel.js'
import asyncHandler from 'express-async-handler'


// @desc create new order
// @route POST /api/order
// @access  private
const addOrderItems = asyncHandler(async(req,res)=>{
      const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        totalPrice
    } = req.body

    if(orderItems && orderItems.legth === 0){
        res.status(400)
        throw new Error('No Order Items')
        return
    }{
        const order = new Order({
        user:req.user._id,
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        totalPrice
        })
        const createdOrder = await order.save()
        res.status(201).json(createdOrder)
    }
})

// @desc Get order by Id
// @route GET /api/order
// @access  private
const getOrderById = asyncHandler(async(req,res)=>{
     const order = await Order.findById(req.params.id).populate('user', 'name email')

     if(order){
         res.json(order)
     }else{
         res.status(404)
         throw new Error('Order Not Found')
     }
})


export  {addOrderItems,getOrderById}