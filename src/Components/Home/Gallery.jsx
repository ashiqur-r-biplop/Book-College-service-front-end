/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import image1 from "../../../public/home-image/group-picture1.png";
import image2 from "../../../public/home-image/group-picture2.png";
import image3 from "../../../public/home-image/group-picture3.png";
import image4 from "../../../public/home-image/group-picture4.png";
import image5 from "../../../public/home-image/group-picture5.png";
import image6 from "../../../public/home-image/group-picture6.png";
import image7 from "../../../public/home-image/group-picture7.png";
import image8 from "../../../public/home-image/group-picture8.png";
import image9 from "../../../public/home-image/group-picture9.png";
import { BiFullscreen } from "react-icons/bi";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Gallery = () => {
    const gallery = [image1, image2, image3, image5, image4, image6, image7, image8, image9];
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
    const openFullscreen = (index) => {
        setCurrentIndex(index);
        setIsFullscreen(true);
    };
    const closeFullscreen = () => {
        setIsFullscreen(false);
        setCurrentIndex(null);
    };
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % gallery.length);
    };
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + gallery.length) % gallery.length);
    };

    return (
        <div className='bg-[#111827a6] py-[30px] md:py-[80px] px-[10px] md:px-[0px]'>
            <h1 className='text-center md:pt-[20px] md:pb-[60px] pb-[20px] text-[32px] md:text-[52px] font-bold text-[#FDE047]'>Our Image Gallery</h1>
            <div className="container mx-auto">
                <div className='grid grid-cols-1 md:grid-cols-4 gap-[20px]'>
                    {gallery.map((photo, i) => (
                        <div
                            className={`${i === 0 ? "md:col-span-2 md:row-span-2 w-full md:h-[420px]" : ""} w-full h-[200px] relative`}
                            key={i}
                            onClick={() => openFullscreen(i)}
                        >
                            <img className='w-full h-full object-cover object-center' src={photo} alt="" />
                            <div className='hover:bg-[#000000b0] absolute top-0 left-0 w-full h-full transition-all opacity-0 hover:opacity-100 duration-300 cursor-pointer flex justify-center items-center text-white text-2xl'>
                                <BiFullscreen />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Fullscreen Modal */}
            {isFullscreen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 ">
                    <button className="absolute top-4 right-4 text-white text-3xl !z-[9999]" onClick={closeFullscreen}>×</button>
                    <div className="relative w-full h-full flex justify-center items-center">
                        <img className="max-w-full max-h-[80vh] w-[60%] h-[60%] object-cover" src={gallery[currentIndex]} alt="" />
                        <div className='absolute top-1/2 transform -translate-y-1/2 text-white text-3xl px-4 w-[80%] mx-auto  flex justify-between items-center text-[26px]'>
                            <button onClick={prevImage}><FaChevronLeft />
                            </button>
                            <button onClick={nextImage}><FaChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
