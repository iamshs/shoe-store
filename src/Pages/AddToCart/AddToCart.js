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
        <div>
          
        </div>
    );
};

export default AddToCart;