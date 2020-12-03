import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Slider from "../components/Slider";
import Message from '../components/Message'
import Categories from '../components/Categories/Categories'
const HomeScreen = () => {
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

    return (
        
        <>
        <Slider />
        <Categories />
         <h1>Latest Products</h1>
         {loading ? <Loader /> :error ? <Message severity='error'>{error}</Message> : 
         <Row>
           {products.map((product)=>(
               <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                   <Product product={product}/>
               </Col>
           ))}
         </Row> }
           
        </>
    )
}

export default HomeScreen;
