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

  // const genderType = genderName =>{
  //   if (genderName === "men" || "women"){
  //     setProducts(products.filter(shoe => shoe.gender === genderName))
  //   }
  //   else return shoes
     

  // }

  const handlePrice = (e) => {
    setInputPrice(e.target.value);
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <main className=" flex gap-4 flex-col lg:flex-row items-center lg:items-start justify-center py-4 md:py-6 lg:py-8  lg:px-3 px-6 ">
      <section className="  w-[full] md:p-4  rounded-lg ">
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
          {/* <div className="w-full my-8  ">
            <ul className=" grid grid-cols-2 place-items-center gap-4">
              <motion.li
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
                className=" flex hover:cursor-pointer shadow-md  py-3 px-6 rounded-sm  text-lg items-center gap-2 bg-white  "
                onClick={() => setProducts(shoes)}
              >
                All Products
              </motion.li>
              <motion.li
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
                className=" flex hover:cursor-pointer bg-white items-center shadow-md  px-6 py-3 text-lg gap-2 rounded-sm"
                onClick={() => filter("adidas")}
              >
                <span>Adidas</span> <SiAdidas size={25} />{" "}
              </motion.li>
              <motion.li
               whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className=" flex hover:cursor-pointer text-lg bg-white items-center gap-2 shadow-md  py-3 px-6 rounded-sm"
                onClick={() => filter("nike")}
              >
                {" "}
                <span>Nike </span>
                <SiNike size={25} />{" "}
              </motion.li>
              <motion.li
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
                className=" flex hover:cursor-pointer text-lg bg-white items-center gap-2 shadow-md  px-6 py-3 rounded-sm"
                onClick={() => filter("others")}
              >
                <span> Others</span>
                <AiOutlineSmallDash size={25} />
              </motion.li>
            </ul>
          </div> */}

          {/* filter----by----price */}
          <div>
            <h1 className="lg:text-3xl text-xl">
              Price: $({inputPrice} to 150)
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

          {/* <div className="flex lg:flex-col flex-row my-10 gap-3 w-full">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#c2d5de]  px-4 font-semibold py-4 shadow-lg text-xl rounded-br-3xl rounded-tl-md
              rounded-tr-md rounded-bl-md"
              onClick={() => genderType("men")}
            >
              Men
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#ff70b5] text-white px-4 font-semibold shadow-lg py-4 text-xl rounded-br-3xl rounded-tl-md
                rounded-tr-md rounded-bl-md "
                onClick={() => genderType("women")}
            >
              Women
            </motion.button>
          </div> */}
        </div>
      </section>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid flex-1  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
       place-items-center "
      >
        {shoes
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
