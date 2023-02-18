import React from "react";
import "./Style/Banner.css";
import { motion } from "framer-motion";

const Banner = () => {
  const transition = { type: "spring", duration: 1 };
 
  return (
    <section className="bg-home ">
      <div className="relative">
        <motion.h1
          transition={transition}
          initial={{ left: -50 }}
          whileInView={{ left: 20 }}
          className="lg:text-7xl text-4xl md:text-5xl text-white lg:top-32 md:top-24 top-12 absolute"
        >
          Start Your Day
        </motion.h1>
        <motion.h2 
         initial={{ scale: 0 }}
        whileInView={{  scale: 1 }}
         transition={{
           type: "spring",
           stiffness: 260,
           
           duration:5,
         }}
        className="lg:text-5xl text-2xl md:text-4xl text-white absolute top-24 md:top-40
          lg:top-56  lg:left-16 left-5">
          With Your Brand
        </motion.h2>
      </div>
    </section>
  );
};

export default Banner;
