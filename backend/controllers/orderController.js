
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
// @route GET /api/orders/:id
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

// @desc update order to paid
// @route GET /api/orders/:id/pay
// @access  private
const updateOrderToPaid = asyncHandler(async(req,res)=>{
     const order = await Order.findById(req.params.id)

     if(order){
        order.isPaid = true
        order.paidAt = Date.now()
        order.paymentResult = {
            id:req.body.id,
            status:req.body.status,
            update_time:req.body.update_time,
            email_address:req.body.payer.email_address
        }
        const updatedOrder = await order.save()

        res.json(updatedOrder)
     }else{
         res.status(404)
         throw new Error('Order Not Found')
     }
})

// @desc Get logged in user orders
// @route GET /api/orders/myorders
// @access  private
const getMyOrders = asyncHandler(async(req,res)=>{
    const orders = await Order.find({user : req.user._id})
               res.json(orders)
    
})

export  {addOrderItems,getOrderById,updateOrderToPaid,getMyOrders}