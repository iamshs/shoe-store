import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Membership = () => {
  return (
    <section className="bg-[#EDE734] flex items-center lg:gap-16 gap-3 md:gap-10 justify-center md:h-44 lg:h-56 h-32 ">
      <h2 className="lg:text-5xl lg:max-w-xl max-w-[50%] text-xl md:text-3xl tracking-wide font-bold">
        JOIN OUR CLUB & GET 15% OFF
      </h2>
      <div className="flex items-center lg:w-[15rem] lg:py-4 py-2 px-2 hover:opacity-80 rounded-md text-white bg-black 
      justify-center gap-1 lg:gap-4">
        <Link to={"/register"} className="lg:text-2xl text-sm md:text-xl  font-semibold">
          SIGN UP FREE
        </Link>
        <BsArrowRight className="lg:text-4xl md:text-2xl text-lg" />
      </div>
    </section>
  );
};

export default Membership;
