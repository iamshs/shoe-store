import React from 'react';
import Banner from '../../Components/Banner';
import NewArrival from '../../Components/NewArrival';
import Products from '../../Components/Products';

const Home = () => {
    return (
        <div >
            <Banner />
            <Products />
            <NewArrival />
        </div>
    );
};

export default Home;