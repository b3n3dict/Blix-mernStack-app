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
import { Container } from "react-bootstrap";
import Camera from "../img/cam-trans.png";
import Mac from "../img/mac-trans.png";
import PS from "../img/ps-trans.png";
import Controller from "../img/controller-trans.png";

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
      {/* <div className="mx-5">
        <div className="display__smallItems row">
          <div className="display__smallItem  col-md-6">
            <div className="col-md-6 display__smallItem-img">
              <img src={Mac} alt="" />
            </div>
            <div className="display__smallItem-desc mt-3">
              <h5>
                Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz 9th
                Gen Intel Core i9) - Space Grey
              </h5>
              <br />
            </div>
          </div>
          <div className="display__smallItem  col-md-6">
            <div className="col-md-6 display__smallItem-img">
              <img src={Controller} alt="" />
            </div>
            <div className="display__item-desc mt-3">
              <h5>
                Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz 9th
                Gen Intel Core i9) - Space Grey
              </h5>
              <br />
            </div>
          </div>
        </div>
      </div> */}
      <div className="px-5">
        <div className="display__item row">
          <div className="display__item-desc col-md-6">
            <h5>
              Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz 9th Gen
              Intel Core i9) - Space Grey
            </h5>
            <br />
            <p>
              Ninth-generation 8-core Intel Core i9 processor Stunning 16-inch
              Retina display with True Tone technology Touch Bar and Touch ID
              AMD Radeon Pro 5500M graphics with GDDR6 memory Ultrafast SSD
            </p>
          </div>
          <div className="col-md-6 display__item-img">
            <img src={Mac} alt="" />
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className="display__item row">
          <div className="col-md-6 display__item-img ">
            <img src={Camera} alt="" />
          </div>
          <div className="display__item-desc col-md-6">
            <h5>Sony Alpha ILCE-7M3K Full-Frame 24.2MP</h5>
            <br />
            <p>
              Mirrorless Camera with 28-70mm Zoom Lens (4K Full Frame, Real-Time
              Eye Auto Focus, Tiltable LCD, Low Light Camera) - Black. Standard
              ISO range from 100 to 51200 15-stop dynamic range at
              low-sensitivity settings 14-bit RAW output for natural gradations
              5-axis optical in-body image stabilization 4D Focus – Wide, Fast,
              Steadfast, AF performance inherited from α9
            </p>
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className="display__item row">
          <div className="display__item-desc col-md-6">
            <h5>
              Sony PS4 1TB Slim Console with Additional Dualshock Controller
              (Black)
            </h5>
            <br />
            <p>
              A Stunning New Design: A slimmer and lighter console with stylish
              new looks and packed with true PlayStation 4 power Slick
              Interface: Fast, personal and easier to share, connect and play
              with friends Experience incredibly vivid, vibrant colours with
              breath-taking HDR visuals
            </p>
          </div>
          <div className="col-md-6 display__item-img">
            <img src={Controller} alt="" />
          </div>
        </div>
      </div>

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
