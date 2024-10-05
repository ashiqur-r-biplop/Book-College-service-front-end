/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import axios from 'axios';
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa';
// var Rating = require('react-rating');
/*  [
                        {
                            reviewImage: person1,
                            reviewName: "National college",
                            reviewDescription: "I had an excellent experience with the college booking platform. It made finding the perfect college simple and easy. The detailed reviews and the admission process guidance were extremely helpful.",
                            reviewIcon: ["⭐", "⭐", "⭐", "⭐", "⭐"]
                        },
                        {
                            reviewImage: person2,
                            reviewName: "Dhaka college",
                            reviewDescription: "The user-friendly interface made it very easy to compare colleges. The search functionality was fast, and I quickly found a college that matched my needs.",
                            reviewIcon: ["⭐", "⭐", "⭐", "⭐"]
                        },
                        {
                            reviewImage: person3,
                            reviewName: "Imperial College",
                            reviewDescription: "Great platform for students! It provides comprehensive information on college rankings, reviews, and admissions. I was able to make a confident decision based on the student reviews.",
                            reviewIcon: ["⭐", "⭐", "⭐", "⭐", "⭐"]
                        },
                        {
                            reviewImage: person4,
                            reviewName: "City College",
                            reviewDescription: "I appreciate how detailed the college profiles were. I got all the necessary information about the courses and admission requirements. Highly recommend using this platform for future students!",
                            reviewIcon: ["⭐", "⭐", "⭐", "⭐", "⭐"]
                        },
                        {
                            reviewImage: person5,
                            reviewName: "Ideal College",
                            reviewDescription: "The platform provided great insights into the application process, and the review system helped me choose the right college. Smooth experience overall.",
                            reviewIcon: ["⭐", "⭐", "⭐", "⭐"]
                        }
                    ] */
const TestimonialSlider = () => {
    const [testimonial, setTestimonial] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios.get("https://book-college-services-server.vercel.app/review")
            .then(data => {
                setTestimonial(data?.data); setLoading(false)
            })
            .catch(err => {
                console.log(err);
                setLoading(false)
            })
    }, [])
    console.log(testimonial);
    if (loading) {
        return
    }
    return (
        <div className='py-[80px]'>
            <h1 className='text-center md:pb-[20px] text-[32px] md:text-[52px] font-bold text-[#FDE047]'>Our Review</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="max-w-[950px] mx-auto !p-[40px]"
            >
                {
                    testimonial?.map((slider, i) => {
                        const { collegePhoto, collegeName, description, rating } = slider || {}

                        return <SwiperSlide className='reviewCard' key={i}>
                            <div className='flex flex-col justify-between items-center p-[40px]'>
                                <div className='flex pb-[5px] text-yellow-300'>
                                    <Rating emptySymbol={<FaStar />} initialRate={rating} readonly />
                                </div>
                                <div>
                                    <img className='w-[60px] h-[60px] object-cover rounded-full' src={collegePhoto} alt="" />
                                </div>
                                <div className='text-center'>
                                    <h2 className='text-xl md:text-2xl mt-[5px] text-yellow-300'>{collegeName}</h2>
                                    <p className='text-[#cacaca]'>{description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    );
};

export default TestimonialSlider;