import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {Button,Row,Col,ListGroup,Image,Card} from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {getOrderDetails} from '../actions/orderActions'
const OrderScreen = ({match}) => {
    const dispatch = useDispatch()
   const orderId = match.params.id
   
   const orderDetails = useSelector(state => state.orderDetails)
   const {order,loading,error} = orderDetails;
   useEffect(()=>{
          dispatch(getOrderDetails(orderId))
   },[dispatch,orderId])

    return loading ? <Loader/> : error ? <Message severity='error'>{error}</Message>
    : <>
       <h1>Order {order._id}</h1>
       <Row>
                <Col md={8}>
                 <ListGroup variant="flush">
                     <ListGroup.Item>
                     
                         <h2>Shipping</h2>
                         <p>
                         <strong>Name: </strong>{order.user.name}</p>
                        <p> <strong>Email: </strong><a href={`mailto:${order.user.email}`}> {order.user.email}</a>
                         </p>
                         <p>
                             <strong>Address:</strong>
                            {''} {order.shippingAddress.address}, {order.shippingAddress.city}
                            {''} {order.shippingAddress.pincode}, {order.shippingAddress.state}
                         </p>
                         {order.isDelivered ? <Message severity="success">Delivered on {order.deliveredAt}</Message> :
                       <Message severity="error">Not Delivered</Message>}
                     </ListGroup.Item>
                     <ListGroup.Item>
                        <h2>Payment Method</h2>
                        <p> <strong>Method:</strong> {order.paymentMethod}</p>
                       {order.isPaid ? <Message severity="success">Paid on {order.paidAt}</Message> :
                       <Message severity="error">Not Paid</Message>}
                     </ListGroup.Item>


                     <ListGroup.Item>
                      <h2>Order Items</h2>
                      {order.orderItems.length === 0 ? <Message>Order is empty</Message> : 
                      (
                          <ListGroup variant="flush">
                              {order.orderItems.map((item,index)=>(
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
                                    <Col>&#8377;{order.itemsPrice.toFixed(2)}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col>&#8377;{order.shippingPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            {/* tax price */}
                            {/* <ListGroup.Item>
                                <Row>
                                    <Col>Tax</Col>
                                    <Col>&#8377;{order.taxPrice}</Col>
                                </Row>
                            </ListGroup.Item> */}
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total</Col>
                                    <Col>&#8377;{order.totalPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                           
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
    </>

}
export default OrderScreen
