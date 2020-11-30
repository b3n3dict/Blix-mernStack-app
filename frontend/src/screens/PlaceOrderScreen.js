import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {Button,Row,Col,ListGroup,Image,Card} from 'react-bootstrap'
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'

const PlaceOrderScreen = () => {
    const cart = useSelector(state=> state.cart)

    // calculate prices
    cart.itemsPrice = cart.cartItems.reduce((acc,item) => acc  + item.price * item.qty,0)
    cart.shippingPrice = cart.itemsPrice > 100 ? 0 : 100
    // tax price
    // cart.taxPrice = Number((0.15 *cart.itemsPrice).toFixed(2))
    cart.totalPrice = (Number(cart.itemsPrice)+ Number(cart.shippingPrice)).toFixed(2)
   const placeOrderHandler =(e)=>{
       e.preventDefault()
       console.log('place order')
   }
    return (
        <>
            <CheckoutSteps step1 step2 step3 step4/>
            <Row>
                <Col md={8}>
                 <ListGroup variant="flush">
                     <ListGroup.Item>
                         <h2>Shipping</h2>
                         <p>
                             <strong>Address:</strong>
                            {''} {cart.shippingAddress.address}, {cart.shippingAddress.city}
                            {''} {cart.shippingAddress.pincode}, {cart.shippingAddress.state}
                         </p>
                     </ListGroup.Item>
                     <ListGroup.Item>
                        <h2>Payment Method</h2>
                        <strong>Method:</strong> {cart.paymentMethod}
                     </ListGroup.Item>


                     <ListGroup.Item>
                      <h2>Order Items</h2>
                      {cart.cartItems.length === 0 ? <Message>Your Cart is empty</Message> : 
                      (
                          <ListGroup variant="flush">
                              {cart.cartItems.map((item,index)=>(
                                  <ListGroup.Item key={index}>
                                      <Row>
                                          <Col md={2}>
                                              <Image src={item.image} alt={item.name}
                                               fluid rounded/>
                                          </Col>
                                          <Col className="mt-1">
                                              <Link to={`/product/${item.product}`}>{item.name}</Link>
                                          </Col>
                                          <Col md={4}>
                                              {item.qty} x  &#8377;{item.price} =  &#8377;{(item.qty * item.price).toFixed(2)}
                                          </Col>
                                      </Row>
                                  </ListGroup.Item>
                              ))}
                          </ListGroup>
                      )
                      }
                     </ListGroup.Item>
                 </ListGroup>
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup varient='flush'>
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Items</Col>
                                    <Col>&#8377;{cart.itemsPrice.toFixed(2)}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col>&#8377;{cart.shippingPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            {/* tax price */}
                            {/* <ListGroup.Item>
                                <Row>
                                    <Col>Tax</Col>
                                    <Col>&#8377;{cart.taxPrice}</Col>
                                </Row>
                            </ListGroup.Item> */}
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total</Col>
                                    <Col>&#8377;{cart.totalPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button type="button" className="btn-block" disabled={cart.cartItems.length === 0} 
                                onClick={placeOrderHandler}>Place Order</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default PlaceOrderScreen
