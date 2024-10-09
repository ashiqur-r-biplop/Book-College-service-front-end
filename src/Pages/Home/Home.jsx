/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../../Components/Home/Banner';
import Collages from '../../Components/Home/Collages';
import Gallery from '../../Components/Home/Gallery';
import TestimonialSlider from '../../Components/Home/TestimonialSlider';
import NewsLatter from '../../Components/Home/NewsLatter';
import ResearchPapers from '../../Components/Home/ResearchPapers';

const Home = () => {
    return (
        <div>
            <Banner />
            <Collages />
            <ResearchPapers />
            <Gallery />
            <TestimonialSlider />
            <NewsLatter />
        </div>
    );
};

export default Home;