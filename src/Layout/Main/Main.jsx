/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../../Sheard/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Sheard/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="md:min-h-[calc(100vh-124px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;