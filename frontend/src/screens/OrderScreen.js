import React, { useState, useEffect } from "react";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup, Image, Card, Button } from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
  getOrderDetails,
  payOrder,
  deliverOrder,
} from "../actions/orderActions";
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET,
} from "../constants/orderConstants";


const OrderScreen = ({ match, history }) => {
  const dispatch = useDispatch();
  const orderId = match.params.id;
  const [sdkReady, setSdkReady] = useState(false);
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: deliverLoading, success: deliverSuccess } = orderDeliver;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
    const addPaypalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=INR`;

      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!order || successPay || deliverSuccess || order._id !== orderId) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPaypalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, orderId, successPay, order, deliverSuccess, history, userInfo]);
  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(orderId, paymentResult));
  };
  const deliverHandler = () => {
    dispatch(deliverOrder(order));
  };
  const codHandler = () =>{

    history.push('/profile')
  }
  return loading ? (
    <Loader />
  ) : error ? (
    <Message severity="error">{error}</Message>
  ) : (
    <>
      <h1 className="mx-5">Order {order._id}</h1>
      <Row className="mx-5">
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Name: </strong>
                {order.user.name}
              </p>
              <p>
                {" "}
                <strong>Email: </strong>
                <a href={`mailto:${order.user.email}`}> {order.user.email}</a>
              </p>
              <p>
                <strong>Address:</strong>
                {""} {order.shippingAddress.address},{" "}
                {order.shippingAddress.city}
                {""} {order.shippingAddress.pincode},{" "}
                {order.shippingAddress.state}
              </p>
              {order.isDelevered ? (
                <Message severity="success">
                  Delivered on {order.deleveredAt}
                </Message>
              ) : (
                <Message severity="error">Not Delivered</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                {" "}
                <strong>Method:</strong> {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message severity="success">Paid on {order.paidAt}</Message>
              ) : (
                <Message severity="error">Not Paid</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {order.orderItems.length === 0 ? (
                <Message>Order is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={2}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col className="mt-1">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x &#8377;{item.price} = &#8377;
                          {(item.qty * item.price).toFixed(2)}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup varient="flush">
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
              {order.paymentMethod ==='COD' && userInfo &&
               !userInfo.isAdmin ? 
              <Button
                      type="button"
                      className="btn btn-block"
                      onClick={codHandler}
                    >
                      Place Order
                    </Button> : 
                    !order.isPaid && (
                <ListGroup.Item>
                  {loadingPay && <Loader />}
                  {!sdkReady ? (
                    <Loader />
                  ) : (
                    <PayPalButton
                      amount={order.totalPrice}
                      onSuccess={successPaymentHandler}
                      currency="INR"
                    />
                  )}
                </ListGroup.Item>
              )} 
               
            
              {deliverLoading && <loading />}
              {userInfo &&
                userInfo.isAdmin &&
                order.isPaid &&
                !order.isDelevered && (
                  <ListGroup.Item>
                    <Button
                      type="button"
                      className="btn btn-block"
                      onClick={deliverHandler}
                    >
                      Mark As Delivered
                    </Button>
                  </ListGroup.Item>
                )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default OrderScreen;
