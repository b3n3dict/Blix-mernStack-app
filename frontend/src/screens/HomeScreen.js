import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
// import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
// import Loader from "../components/Loader";
import Slider from "../components/Slider";
// import Message from "../components/Message";
import Categories from "../components/Categories/Categories";
import CategoryItem from "../components/CategoryItem";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <div className="container-fluid ">
      <Slider />
      <div className="categoryItem__container row mt-4">
        <Link to="/computer-accessories">
          <CategoryItem
            title="Computer & Accessories"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
          />
        </Link>
        <Link to="/holiday-deals">
          <CategoryItem
            title="Holiday Deals"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_Dash_HolidayDeals_1x._SY304_CB414581989_.jpg"
          />
        </Link>

        <Link to="/electronics">
          <CategoryItem
            title="Electronics"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
          />
        </Link>

        <Link to="/krent-basics">
          <CategoryItem
            title="Krent Basics"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
          />
        </Link>
      </div>
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
