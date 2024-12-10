import React from "react";
import LayOUt from "../../Components/LayOut/LayOut"
import CarouselEffect from "../../Components/Carousel/CarouselEffect";
import Category from "../../Components/Category/Category";
import Product from "../../Components/Product/Product";

function Landing() {
  return (
    <LayOUt>
      <CarouselEffect />
      <Category/>
      <Product />
    </LayOUt>
  );
}

export default Landing;
