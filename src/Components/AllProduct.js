import React, { useState } from 'react';
import Rating from "@mui/material/Rating";
import { AiFillShopping } from "react-icons/ai";
import { motion } from "framer-motion";
import {item} from '../helpers/framer-motion'
import {container} from '../helpers/framer-motion'
import Spinner from './Spinner';

const AllProduct = ({shoes,isLoading}) => {
  const [inputPrice,setInputPrice] = useState(100);

  const handlePrice = (e)=>{
    setInputPrice( e.target.value );
  }



if(isLoading)
{
    return <Spinner />
}
    return (
       <>
        <div className="my-10 px-10  ">
        <h2 className="text-3xl my-3"> Price: $({inputPrice} to 150) </h2>
        <input type={"range"} min="80" value={inputPrice} max="150" className="w-[20%]" onChange={handlePrice} />
      </div>
        <motion.div  variants={container}
        initial="hidden"
        animate="visible"
       className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6
        lg:px-14 px-4 place-items-center py-4 md:py-6 lg:py-8'>
           {
            shoes.filter(shoe =>  { return shoe.price > parseInt(inputPrice, 10) }).map((shoe,i) => <motion.div variants={item}
            className="border-2 rounded-md  lg:max-w-xs md:max-w-xs w-[90%] md:w-full lg:w-full h-[22rem]
             shadow-sm relative "
          >
            <img src={shoe.image} className=" mx-auto h-[50%] w-[80%] " alt={shoe.name} />
            <div className="flex flex-col justify-center gap-5 h-[40%] bg-white px-3  ">
              <h2 className="text-[#797575] font-bold"> {shoe.name} </h2>
              <Rating name="read-only" size="small" value={shoe.rating} readOnly />
              <h2 className="font-bold"> ${shoe.price} </h2>
            </div>
            <button
              className="flex items-center justify-center
            show-btn w-full py-2.5 rounded-b-lg gap-2 bg-black text-white  absolute bottom-0"
            >
              Add to cart
              <AiFillShopping size={24} />
            </button>
          </motion.div>)
           } 
        </motion.div>
       </>
    );
};

export default AllProduct;