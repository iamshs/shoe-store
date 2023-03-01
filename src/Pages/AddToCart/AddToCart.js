import { Rating } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../Components/Spinner';

const AddToCart = () => {
    const {id} = useParams()
   
  const { data:shoe , isLoading } = useQuery({
    queryKey: ['singleProductData'],
    queryFn: () =>
      fetch(`http://localhost:5000/product/${id}`).then(
        (res) => res.json(),
      ),
  })

  if(isLoading){
    return <Spinner />
  }

  console.log(shoe);

    return (
        <main className='flex items-start justify-around min-h-screen lg:py-[5rem] '>
          <section className='max-w-[55%] '>  
           <img className='w-[100%]' src={shoe.image} alt="" />
          </section>
          <section className='max-w-[40%] flex flex-col gap-24 '>
            <div className='flex flex-col gap-10'>
            <div className='flex items-center gap-1'>
            <div className='w-3 h-3 rounded-full bg-black'></div>
            <h5 className='text-xl font-bold'> For {shoe.gender}  </h5>
            </div>
            <h1 className='text-4xl font-semibold'> {shoe.name} </h1>
            <h2 className='text-3xl font-bold'>${shoe.price} </h2>
            <div>
            <h3 className='text-lg '> Brand:<span className='font-bold'>{shoe.brand}</span> </h3>
            <Rating className='mt-6' name="read-only" size="large" value={shoe.rating} readOnly />
            </div>
            </div>
           <div className='flex flex-col gap-6'>
           <p className='font-semibold text-lg'> {shoe.detail} </p>
           <button className='bg-black text-white lg:text-xl w-[50%] py-4 '>Add to Cart</button>
           </div>
          </section>
        </main>
    );
};

export default AddToCart;