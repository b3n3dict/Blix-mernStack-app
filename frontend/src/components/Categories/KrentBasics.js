import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../Product";
import { listProducts } from "../../actions/productActions";
import Loader from "../Loader";
import Message from "../Message";

const KrentBasics = ({match}) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;
  const all = 1;
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts(keyword,pageNumber,all));
  }, [dispatch,keyword,pageNumber,all]);

  return (
    <>
      <Link className="btn btn-light my-3 ml-3 btn__right" to="/">
        Go Back
      </Link>

      <h1 className="mx-5">KrentBasics</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message severity="error">{error}</Message>
      ) : (
        <Row className="mx-5">
          {products
            .filter((product) => product.category === "Krent-Basics")
            .map((item) => (
              <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={item} />
              </Col>
            ))}
        </Row>
      )}
    </>
  );
};

export default KrentBasics;
