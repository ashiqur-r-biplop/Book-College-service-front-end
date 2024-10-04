import bannerImage from "/public/home-image/banner.png"
const Banner = () => {
    return (
        <div className="md:h-[80vh] relative w-[100%]" style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
        }}>
            <div className="bg-[#111827a6] w-full h-full flex justify-center items-center">
                <div className="flex justify-center flex-col items-center text-center gap-[50px]">
                    <div>
                        <h1 className="text-[#FDE047] font-bold uppercase text-[28px] md:text-[36px] lg:text-[52px]">Perfect Education Courses</h1>
                        <p className="md:w-[60%] mx-auto md:text-[22px] text-[#eeeeee] mt-[10px]">New skills and knowledge can spark a lifetime of change. For 60 years, Education Development
                            Center (EDC), has designed and delivered programs in education, health</p>
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