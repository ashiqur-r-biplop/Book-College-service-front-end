/* eslint-disable no-unused-vars */
import React from 'react';
import ResearchImage from "../../../public/home-image/ResearchImage.png"
import { Link } from 'react-router-dom';
const ResearchPapers = () => {
    return (
        <div className='container mx-auto py-[30px] md:py-[80px]'>
            <h1 className='text-center md:pt-[20px] md:pb-[60px] pb-[20px] text-[32px] md:text-[52px] font-bold text-[#FDE047]'>Strong Researching </h1>
            <div className='flex flex-col justify-center items-center gap-[30px]'>
                <div className='w-full md:w-[550px] mx-auto'>
                    <img src={ResearchImage} alt="" />
                </div>
                <div className='flex flex-wrap justify-center items-center gap-[20px]'>
                    <Link target='_blank' to={"https://www.lawinsider.com/dictionary/specified-document"} className='text-[#111827] border-b hover:border-b-[#ff5f1f]  active:text-[#ff5f1f] hover:text-[#ff5f1f] duration-300 transition-all border-[#111827]'>Specific</Link>
                    <Link target='_blank' to={"https://asana.com/resources/feasibility-study"} className='text-[#111827] border-b hover:border-b-[#ff5f1f]  active:text-[#ff5f1f] hover:text-[#ff5f1f] duration-300 transition-all border-[#111827]'>Feasible</Link>
                    <Link target='_blank' to={"https://www.lawinsider.com/dictionary/original-document#:~:text=Original%20Document%20means%20the%20initially,same%20effect%20by%20the%20creator."} className='text-[#111827] border-b hover:border-b-[#ff5f1f]  active:text-[#ff5f1f] hover:text-[#ff5f1f] duration-300 transition-all border-[#111827]'>Original</Link>
                    <Link target='_blank' to={"https://www.collinsdictionary.com/dictionary/english/relevant-documents"} className='text-[#111827] border-b hover:border-b-[#ff5f1f]  active:text-[#ff5f1f] hover:text-[#ff5f1f] duration-300 transition-all border-[#111827]'>Relevant</Link>
                    <Link target='_blank' to={"https://library.defiance.edu/InfoLit-GettingStarted/question"} className='text-[#111827] border-b hover:border-b-[#ff5f1f]  active:text-[#ff5f1f] hover:text-[#ff5f1f] duration-300 transition-all border-[#111827]'>Complex and Arguable</Link>
                    <Link target='_blank' to={"https://www.scribbr.com/category/research-paper/"} className='text-[#111827] border-b hover:border-b-[#ff5f1f]  active:text-[#ff5f1f] hover:text-[#ff5f1f] duration-300 transition-all border-[#111827]'>Researchable</Link>
                    <Link target='_blank' to={"https://solutionfocused.net/solution-focused-documentation/"} className='text-[#111827] border-b hover:border-b-[#ff5f1f] active:text-[#ff5f1f] hover:text-[#ff5f1f] duration-300 transition-all border-[#111827]'>Focused</Link>
                </div>
            </div>
        </div>
    );
};

export default ResearchPapers;