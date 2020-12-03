import React, { useEffect } from "react";
import "./ProductList.css";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { listProducts } from "../actions/productActions";
import Message from "./Message";
import Loader from "./Loader";

const SubHomeScreen = ({ title }) => {
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="productList">
      <h3 className="productList__header">{title}</h3>
      <div className="productList__body">
        {loading ? (
          <Loader />
        ) : error ? (
          <Message severity="error">{error}</Message>
        ) : (
          <div className="productList__products">
            {products.map((product) => (
              <div key={product._id}>
                <Product className="productList__product" product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubHomeScreen;
