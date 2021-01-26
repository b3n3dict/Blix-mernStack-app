import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from '../components/Paginate'
const SearchScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1
  
  const productList = useSelector((state) => state.productList);
  const { loading, error, products,page,pages } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts(keyword,pageNumber));
  }, [dispatch, keyword,pageNumber]);

  return (
    <div className="productList">
      <h3 className="productList__header">Searched Products</h3>
      <div className="productList__body2">
        {loading ? (
          <Loader />
        ) : error ? (
          <Message severity="error">{error}</Message>
        ) : (
          <>
          <Row className="productList__body2">
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''}/>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchScreen;
