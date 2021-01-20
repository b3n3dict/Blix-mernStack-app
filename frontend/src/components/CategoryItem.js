import React from "react";
import "./CategoryItem.css";

const Categories = ({ title, image }) => {
  return (
    <div className="category neu__button">
      <div className="category__description">
        <span className="category__title">{title}</span>
      </div>
      <div className="category__image ">
        <img src={image} alt="" />

        <p>Shop now</p>
      </div>
    </div>
  );
};

export default Categories;
