/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../../Components/Home/Banner';
import Collages from '../../Components/Home/Collages';
import Gallery from '../../Components/Home/Gallery';
import TestimonialSlider from '../../Components/Home/TestimonialSlider';

const Home = () => {
    return (
        <div>
            <Banner />
            <Collages />
            <Gallery />
            <TestimonialSlider />
        </div>
    );
};

export default Home;