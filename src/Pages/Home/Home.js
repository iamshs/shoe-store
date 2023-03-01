import React from 'react';
import Banner from '../../Components/Banner';
import Membership from '../../Components/Membership';
import NewArrival from '../../Components/NewArrival';
import Products from '../../Components/Products';

const Home = () => {
    return (
        <div >
            <Banner />
            <Products />
            <NewArrival />
            <Membership />
        </div>
    );
};

export default Home;