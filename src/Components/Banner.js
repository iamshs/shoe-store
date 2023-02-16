import React from "react";
import Bg from "../assets/bg-home.jpg";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundColor: "#cccccc",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        height: "70vh"
      }}
    >
      <h1>Buy your shoes</h1>
    </div>
  );
};

export default Banner;
