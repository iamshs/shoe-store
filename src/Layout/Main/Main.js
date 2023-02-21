import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Main = () => {
    return (
        <div className='max-w-8xl'>
           <Navbar />
           <Outlet /> 
        </div>
    );
};

export default Main;