/* eslint-disable no-unused-vars */
import { IoSearch } from "react-icons/io5";
import bannerImage from "/public/home-image/banner.png"
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Banner = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [isValue, setIsValue] = useState("");
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    useEffect(() => {
        setLoading(true)
        axios?.get("http://localhost:5000/colleges")
            .then(data => {
                const value = data?.data?.filter((college, i) =>
                    college?.collegeName.toLowerCase().includes(isValue.toLowerCase())
                );


                setData(value.slice(0, 3))
                setLoading(false)
            }).catch(err => console.log(err))
    }, [isValue])
    console.log(data);
    return (
        <div className="md:h-[80vh] relative w-[100%] " style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
        }}>
            <div className="bg-[#111827a6] w-full h-full flex justify-center items-center py-[40px]">
                <div className="flex justify-center flex-col items-center text-center gap-[50px] ">
                    <div>
                        <h1 className="text-[#FDE047] font-bold uppercase text-[28px] md:text-[36px] lg:text-[52px]">Perfect Education Courses</h1>
                        <p className="md:w-[60%] mx-auto md:text-[22px] text-[#eeeeee] mt-[10px]">New skills and knowledge can spark a lifetime of change. For 60 years, Education Development
                            Center (EDC), has designed and delivered programs in education, health</p>
                    </div>
                    <div className="hidden lg:flex justify-center items-center relative">
                        <input
                            type="text"
                            placeholder="Search for a college name."
                            className={`border p-2 py-[15px] px-[20px] transition-all duration-300 outline-none rounded-s-full text-white ease-in-out placeholder:text-[#858585] bg-transparent ${isValue || isFocused ? 'md:w-[300px] rounded-s' : 'w-[150px]'
                                }`}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            onChange={(e) => setIsValue(e.target.value)}
                        />
                        <div className="absolute top-[53px] w-[100%]">
                            {
                                loading ? <div className="h-[50px] flex justify-center items-center bg-base-200"><span className="loading loading-dots loading-sm"></span></div> : (isValue && data) && <div className="grid grid-cols-1 gap-[20px] bg-base-200 px-[10px] py-[20px] shadow-lg">
                                    {
                                        data?.map((college, i) => {
                                            console.log(college);
                                            const { photo, address, collegeName, _id } = college
                                            return <Link key={i} to={`/college-details/${_id}`}>
                                                <div className="cursor-pointer border border-gray-400 p-[10px] flex justify-start items-start gap-[10px] hover:bg-gray-400 transition-all duration-300 rounded-sm">
                                                    <div className="w-[50px] h-[50px]">
                                                        <img src={photo} alt="" className="object-cover h-full w-full rounded" />
                                                    </div>
                                                    <div className="flex flex-col justify-between items-start h-[100%]">
                                                        <h3 className="font-semibold text-[18px]">{collegeName}</h3>
                                                        <h3 className="">{address}.</h3>
                                                    </div>
                                                </div></Link>
                                        })
                                    }
                                </div>
                            }
                        </div>

                        <button className={`bg-base-200 pb-[19px] pt-[20px] px-[20px] ${isFocused || isValue ? "rounded-e" : "rounded-e-full "}`}><IoSearch /></button>
                    </div>
                    <div className="flex gap-[20px]">
                        <button className="uppercase bg-[#fddf47af] hover:bg-[#FDE047] transition-all hover:text-[#19191D] border border-[#FDE047] rounded-full text-white md:text-[22px] px-[30px] py-[5px]">Get Started</button>
                        <button className="uppercase  hover:bg-[#FDE047] transition-all hover:text-[#19191D] border border-[#FDE047] rounded-full text-[#FDE047] md:text-[22px] px-[30px] py-[5px]">Get Courses</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;