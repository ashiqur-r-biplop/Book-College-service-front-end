/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import person1 from "../../../public/home-image/person-1.png"
import person2 from "../../../public/home-image/person-2.png"
import person3 from "../../../public/home-image/person-3.png"
import person4 from "../../../public/home-image/person-4.png"
import person5 from "../../../public/home-image/person-5.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
const TestimonialSlider = () => {
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
                    [
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
                    ]?.map((slider, i) => {
                        const { reviewImage, reviewName, reviewDescription, reviewIcon } = slider || {}
                        return <SwiperSlide className='reviewCard' key={i}>
                            <div className='flex flex-col justify-between items-center p-[40px]'>
                                <div className='flex pb-[5px]'>
                                    {reviewIcon?.map((icon, i) => {
                                        return <p key={i}> {icon}</p>
                                    })}
                                </div>
                                <div>
                                    <img className='w-[60px] h-[60px] object-cover rounded-full' src={reviewImage} alt="" />
                                </div>
                                <div className='text-center'>
                                    <h2 className='text-xl md:text-2xl mt-[5px] text-yellow-300'>{reviewName}</h2>
                                    <p className='text-[#cacaca]'>{reviewDescription}</p>
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