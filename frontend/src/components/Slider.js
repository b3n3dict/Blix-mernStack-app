import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import Slide1 from "./SlideImages/slide1.png";
import Slide2 from "./SlideImages/slide5.png";
import Slide3 from "./SlideImages/slide4.jpg";
import "./Slider.css";

const items = [
  {
    src: Slide1,
    caption: "",
  },
  {
    src: Slide2,
    caption: "",
  },

  {
    src: Slide3,
    caption: "",
  },
];

const Slider = () => (
  <UncontrolledCarousel
    className="slider login__form-button mt-3 "
    items={items}
  />
);

export default Slider;
