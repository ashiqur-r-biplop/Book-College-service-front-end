import { IoSearch } from "react-icons/io5";
import bannerImage from "/public/home-image/banner.png"
import { useState } from "react";
const Banner = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [isValue, setIsValue] = useState("");
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
                    <div className="hidden lg:flex justify-center items-center">
                        <input
                            type="text"
                            placeholder="Search for a college name."
                            className={`border p-2 py-[15px] px-[20px] transition-all duration-300 outline-none rounded-s-full text-white ease-in-out placeholder:text-[#858585] bg-transparent ${isValue || isFocused ? 'md:w-[300px]' : 'w-[150px]'
                                }`}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            onChange={(e) => setIsValue(e.target.value)}
                        />
                        <button className='bg-base-200 pb-[19px] pt-[20px] px-[20px] rounded-e-full'><IoSearch /></button>
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