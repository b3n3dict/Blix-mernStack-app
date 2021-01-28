import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
// import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
// import Loader from "../components/Loader";
// import Slider from "../components/Slider";
// import Message from "../components/Message";
import Categories from "../components/Categories/Categories";
import CategoryItem from "../components/CategoryItem";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
// import { Container } from "react-bootstrap";
import TV from "../img/tv-trans.png";
// import Mac from "../img/mac-trans.png";
import PS from "../img/ps5-trans.png";
import Fashion from "../img/fashion.png";
import { LinkContainer } from "react-router-bootstrap";
import Paginate from "../components/Paginate";
import Aos from "aos";
import "aos/dist/aos.css";
import HomePage from "../components/HomePage";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Product from "../components/Product";
import { Col, Row } from "react-bootstrap";
import Basics from "../img/basics.jpg";
import holiday from "../img/holiday.jpg";
import offer from "../img/offer.jpg";
import trending from "../img/trending.jpg";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const dispatch = useDispatch();

  useEffect(() => {
    Aos.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 100, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 3000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <div className="">
      <HomePage />
      {/* <Slider /> */}
      <div className="categoryItem__container mt-3">
        <Link to="/trending-now">
          <CategoryItem title="Trending Now" image={trending} />
        </Link>
        <Link to="/holiday-deals">
          <CategoryItem title="Holiday Deals" image={holiday} />
        </Link>

        <Link to="/offers">
          <CategoryItem title="Upto 50% off" image={offer} />
        </Link>

        <Link to="/krent-basics">
          <CategoryItem title="Krent Basics" image={Basics} />
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
        <div className=" display__item row" data-aos="fade-right">
          <div className="display__item-desc col-md-6">
            <LinkContainer
              to="/product/600c0aa0a8e8774f6c6652e1"
              style={{ cursor: "pointer" }}
            >
              <h5>Sony PS5 1TB Slim Console with Additional Dualshock</h5>
            </LinkContainer>

            <br />
            <p>
              Lightning speed Harness the power of a custom CPU, GPU and SSD
              with Integrated I/O that rewrite the rules of what a PlayStation
              console can do.The custom integration of the PS5 console's systems
              lets creators pull data from the SSD so quickly that they can
              design games in ways never before possible.
            </p>
          </div>
          <div className="col-md-6 display__item-img">
            <LinkContainer
              to="/product/600c0aa0a8e8774f6c6652e1"
              style={{ cursor: "pointer" }}
            >
              <img src={PS} alt="" />
            </LinkContainer>
          </div>
        </div>
        <div className="px-5">
          <div className="display__item row ml-2" data-aos="zoom-in-left">
            <div className="col-md-6 display__item-img ">
              <LinkContainer
                to="/product/600bedc2baba0b4804ca72df"
                style={{ cursor: "pointer" }}
              >
                <img src={TV} alt="" />
              </LinkContainer>
            </div>
            <div className="display__item-desc col-md-6">
              <LinkContainer
                to="/product/600bedc2baba0b4804ca72df"
                style={{ cursor: "pointer" }}
              >
                <h5>
                  OnePlus Y Series 80 cm (32 inches) HD Ready LED Smart Android
                  TV 32Y1 (Black)
                </h5>
              </LinkContainer>
              <br />
              <p>
                Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz
                Connectivity: 2 HDMI ports to connect set top box, Blu Ray
                players, gaming console | 2 USB ports to connect hard drives and
                other USB devices Sound : 20 Watts Output | Dolby Audio
              </p>
            </div>
          </div>
        </div>
        <div className="display__item row" data-aos="fade-right">
          <div className="display__item-desc col-md-6">
            <LinkContainer
              to="/product/600be827cabbed2f002d5225"
              style={{ cursor: "pointer" }}
            >
              <h5>ILLI LONDON Women's Top</h5>
            </LinkContainer>
            <br />
            <p>
              Women's Casual and Comfortable Half Sleeve Solid Collared Boxy
              Fit.Care Instructions: hand wash Fit Type: regular_fit 100% Rayon
              hand wash Crop Top <br />
              Fit Type: Slim Fit <br /> Sleeve: Half Sleeve <br /> Color:Black{" "}
            </p>
          </div>
          <div className="col-md-6 display__item-img">
            <LinkContainer
              to="/product/600be827cabbed2f002d5225"
              style={{ cursor: "pointer" }}
            >
              <img src={Fashion} alt="" />
            </LinkContainer>
          </div>
        </div>
      </div>
      {/* <ProductList title="Latest Products" /> */}
      {/* <ProductList title="New Trends" /> */}
      {/* <Slider /> */}
      <ProductList title="Your Recommendations" />
      <h3 className="ml-5 productList__header">Latest Products</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message severity="error">{error}</Message>
      ) : (
        <>
          <Row className="mx-5">
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <div className="pagination__container container px-5 mx-5">
            <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ""}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default HomeScreen;
