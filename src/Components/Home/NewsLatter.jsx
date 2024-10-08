/* eslint-disable no-unused-vars */
import React from 'react';
import funTimeImage from "../../../public/home-image/funTimeImage.png"
import { Link } from 'react-router-dom';
const NewsLatter = () => {
    return (
        <div className='container mx-auto !z-[999]'>
            <div className='h-[250px] ' style={{
                backgroundImage: `url(${funTimeImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                clipPath: "polygon(0 0, 100% 12%, 100% 50%, 100% 100%, 0 100%, 0% 50%)",
            }}>
                <div className='bg-[#757575a2] h-full md:p-[80px] pt-[60px] md:pt-[80px] flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-[20px] px-[10px]'>
                    <p className='md:text-2xl text-[18px] md:w-[40%] text-[#fff]'>To Boost Science Learning, Start Early 4 Ways to Explore Science
                        with Your Child</p>
                    <Link to={"/admission"}>
                        <button className='border border-[#FDE047] px-[30px] py-[5px] rounded-full text-[#FDE047] hover:bg-[#FDE047] hover:text-[#000] text-xl duration-300 transition-all'>Start Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsLatter;