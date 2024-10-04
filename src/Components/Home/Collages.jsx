import React from 'react';
import collegeImage from "../../../public/home-image/college-image.png"
import { Link } from 'react-router-dom';
const Collages = () => {
    return (
        <div className='max-w-[1080px] mx-auto py-[80px]'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-[20px]'>
                {
                    [1, 2, 3,]?.map((college, i) => {
                        return <div key={i} className='border shadow-inner p-[20px] rounded'>
                            <div className='flex flex-col justify-between items-start gap-[15px]'>
                                <div className='w-full'>
                                    <img className='h-[150px] w-full object-center object-cover' src={collegeImage} alt="" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-[#19191D]">College Name</h2>
                                    <p>Admission Dates: Aug 2024</p>
                                    <p>Events: Sports, Research</p>
                                </div>
                                <Link to="/college-details" className="text-[#19191D] rounded-full border px-[20px] py-[5px] border-[#19191D] hover:bg-[#19191D] transition-all hover:text-[#dddd] duration-300">Details</Link>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Collages;