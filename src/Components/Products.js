import React from 'react';
import useProducts from '../hooks/useProducts';
import Spinner from './Spinner';
import Plane from '../assets/plane.png'
import './Style/Products.css'
import Product from './Product';
import { motion } from "framer-motion";
import {container} from '../helpers/framer-motion'


const Products = () => {
    const [shoes,isLoading , error] = useProducts()

    if(isLoading){
        return <Spinner />
    }
    return (
        <section className='lg:py-14 py-8 '>
         <div className='flex items-center justify-start gap-2 px-6'>
            <img className='w-16' src={Plane} alt='plane' />
         <h1 className='lg:text-4xl text-2xl font-semibold'>Our Feature</h1>
         </div>
         <motion.div 
          variants={container}
          initial="hidden"
          animate="visible"
         className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6
          lg:px-14 px-4 place-items-center py-8 lg:py-14'>
            {shoes.slice(0,8).map((shoe,i) => <Product shoe={shoe} key={i} />)}
         </motion.div>
        </section>
    );
};

export default Products;