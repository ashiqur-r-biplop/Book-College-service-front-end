/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import collegeImage from "../../../public/home-image/college-image.png"
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../../Sheard/Spinner/Spinner';
const Collages = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios?.get("https://book-college-services-server.vercel.app/colleges")
            .then(data => {
                setData(data?.data)
                setLoading(false)
            }).catch(err => console.log(err))
    }, [])
    if (loading) {
        return <Spinner />
    }
    return (
        <div className='max-w-[1080px] mx-auto py-[30px] md:py-[80px] px-[10px] md:px-0'>
            <h1 className='text-center md:pt-[20px] md:pb-[60px] pb-[20px] text-[32px] md:text-[52px] font-bold text-[#FDE047]'>Our Collage</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-[20px]'>
                {
                    data?.slice(0, 3).map((college, i) => {
                        console.log(college);
                        const { collegeName, dob, subject, _id, photo } = college
                        return <div key={i} className='border shadow-inner p-[20px] rounded'>
                            <div className='flex flex-col justify-between items-start gap-[15px] relative'>
                                <div className='w-full'>
                                    <img style={{
                                        clipPath: "polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 85%, 0 80%)"
                                    }} className='h-[150px] w-full object-center object-contain' src={photo} alt="" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-[#19191D]">{collegeName}</h2>
                                    <p>Admission Dates:{dob}</p>
                                    <p>Events: {subject}</p>
                                </div>
                                <Link to={`/college-details/${_id}`} className="text-[#19191D] rounded-full border px-[20px] py-[5px] border-[#19191D] hover:bg-[#19191D] transition-all hover:text-[#dddd] duration-300">Details</Link>
                                <p className='absolute top-2 right-2 bg-[#FDE047] text-xs py-[4px] rounded-full px-[12px]'>Best College</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Collages;