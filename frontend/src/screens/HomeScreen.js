import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
// import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
// import Loader from "../components/Loader";
import Slider from "../components/Slider";
// import Message from "../components/Message";
import Categories from "../components/Categories/Categories";
import ProductList from "../components/ProductList";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <div className="container-fluid">
      <Slider />
      <Categories />
      <ProductList title="Latest Products" />
      <ProductList title="New Trends" />
      <ProductList title="Your Recommendations" />

      {/* <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message severity="error">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )} */}
    </div>
  );
};

export default HomeScreen;
