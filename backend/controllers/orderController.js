
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
        itemPrice,
        shippingPrice,
        totalPrice
    } = req.body

    if(orderItems && orderItems.legth === 0){
        res.status(400)
        throw new Error('No Order Items')
        return
    }{
        const order = new Order({
        orderItems,
        user:req.user._id,
        shippingAddress,
        paymentMethod,
        itemPrice,
        shippingPrice,
        totalPrice
        })
        const createdOder = await order.save()
        res.status(201).json(createdOder)
    }
})


export  {addOrderItems}