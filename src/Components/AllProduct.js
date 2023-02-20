import React, { useState } from "react";
import { container } from "../helpers/framer-motion";
import Spinner from "./Spinner";
import ProductDiv from "./ProductDiv";
import { motion } from "framer-motion";
import { SiNike } from "react-icons/si";
import { SiAdidas } from "react-icons/si";
import { AiOutlineSmallDash } from "react-icons/ai";

const AllProduct = ({ shoes, isLoading }) => {
  const [inputPrice, setInputPrice] = useState(80);

  const [products, setProducts] = useState(shoes);

  const filter = (brandName) => {
    setProducts(shoes.filter((shoe) => shoe.brand === brandName));
  };

  const handlePrice = (e) => {
    setInputPrice(e.target.value);
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <main className=" flex gap-4 flex-col lg:flex-row items-start justify-center py-4 md:py-6 lg:py-8  lg:px-3 px-6 ">
      <section className="bg-white shadow-md rounded-lg ">
        <div className="py-8 lg:px-8 flex items-center flex-col gap-3">
          {/* search---field */}

          <div className=" w-full">
            <input
              type="text"
              className="bg-[#e9e9e9] w-full lg:h-[3.5rem] h-[2.5rem] rounded-lg lg:text-2xl text-xl p-4  focus:outline-none"
              placeholder="search by name"
            />
          </div>

          {/* choose---brand */}
          <div className="w-full my-8 ">
            <ul className=" flex lg:flex-col flex-row gap-2">
              <li
                className=" flex hover:cursor-pointer text-xl items-center gap-2 p-2 rounded-lg"
                onClick={() => setProducts(shoes)}
              >
                All Products
              </li>
              <li
                className=" flex hover:cursor-pointer items-center shadow-md w-[50%] p-4 text-lg gap-2 rounded-lg"
                onClick={() => filter("adidas")}
              >
                <span>Adidas</span> <SiAdidas size={25} />{" "}
              </li>
              <li
                className=" flex hover:cursor-pointer text-lg items-center gap-2 shadow-md w-[50%] p-4 rounded-lg"
                onClick={() => filter("nike")}
              >
                {" "}
                <span>Nike </span>
                <SiNike size={25} />{" "}
              </li>
              <li
                className=" flex hover:cursor-pointer text-lg items-center gap-2 shadow-md w-[50%] p-4 rounded-lg"
                onClick={() => filter("others")}
              >
               <span> Others</span>
                <AiOutlineSmallDash size={25}/>
              </li>
            </ul>
          </div>

          {/* filter----by----price */}
          <div>
            <h1 className="lg:text-3xl text-xl">
              Price: $({inputPrice} to 150){" "}
            </h1>
            <input
              type={"range"}
              min="80"
              value={inputPrice}
              max="150"
              className="w-full "
              onChange={handlePrice}
            />
          </div>

        </div>
      </section>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid flex-1  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
       place-items-center "
      >
        {products
          .filter((shoe) => {
            return shoe.price > parseInt(inputPrice, 10);
          })
          .map((shoe, i) => (
            <ProductDiv shoe={shoe} key={i} />
          ))}
      </motion.div>
    </main>
  );
};

export default AllProduct;
