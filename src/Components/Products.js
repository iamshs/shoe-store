import React from 'react';
import useProducts from '../hooks/useProducts';
import Spinner from './Spinner';

const Products = () => {
    const [shoes,isLoading , error] = useProducts()

    if(isLoading){
        return <Spinner />
    }
    return (
        <div>
           {shoes.length} 
        </div>
    );
};

export default Products;