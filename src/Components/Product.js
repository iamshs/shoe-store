import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { AiFillShopping } from "react-icons/ai";
import { motion } from "framer-motion";
import {item} from '../helpers/framer-motion'
import {AiFillHeart} from "react-icons/ai"
import { useNavigate } from "react-router-dom";

const Product = ({ shoe }) => {
  const { image, name, price, rating,_id } = shoe;
  const navigate = useNavigate() ;
  const [iconColor , setIconColor] = useState("black")

  const handleAddToCart = id =>{
    navigate(`addToCart/${id}`)
  }

  const handleWishList = () =>{
    if(iconColor === "black"){
      setIconColor("red")
    }
    else{
      setIconColor("black")
    }
  }

  return (
    <motion.div variants={item}
      className="border-2 rounded-md  lg:max-w-xs md:max-w-xs w-[90%] md:w-full lg:w-full h-[22rem]
       shadow-sm relative "
    >
      <AiFillHeart onClick={handleWishList} style={{color:iconColor}} className="absolute right-2 top-2 text-2xl hover:cursor-pointer" />
      <img src={image} className=" mx-auto h-[50%] w-[80%] " alt={name} />
      <div className="flex flex-col justify-center gap-5 h-[40%] bg-white px-3  ">
        <h2 className="text-[#797575] font-bold"> {name} </h2>
        <Rating name="read-only" size="small" value={rating} readOnly />
        <h2 className="font-bold"> ${price} </h2>
      </div>
      <motion.button
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.9 }}
      onClick={() =>handleAddToCart(_id)}
        className="flex items-center justify-center
      show-btn w-full py-2.5 rounded-b-lg gap-2 bg-black text-white  absolute bottom-0"
      >
        Add to cart
        <AiFillShopping size={24} />
      </motion.button>
    </motion.div>
  );
};

export default Product;
