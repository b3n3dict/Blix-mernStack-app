import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded product">
      <Link to={`/product/${product._id}`}>
        <Card.Img
          className="product__image"
          src={product.image}
          variant="top"
        />
      </Link>
      <Card.Body>
        <Link
          to={`/product/${product._id}`}
          className="text-decoration-none text-reset"
        >
          <Card.Title as="div">
            <strong className="product__title">{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text className="product__price" as="h3">
          &#8377;{product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
