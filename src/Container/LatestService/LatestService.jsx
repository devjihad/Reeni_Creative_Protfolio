import React, { useContext } from 'react';
import rightImg from '../../assets/Margin.png'
import { contextData } from '../../Context/Context';
const LatestService = () => {
    const {togglevalue, settogglevalue} = useContext(contextData)
    return (
        
        <div className='container mt-20 md:mt-30 px-5 md:px-0'>
            <div className=''>
            <p className='text-[16px] text-red1 text-center font-rubik '>LATEST SERVICE</p>
            <p className= ' text-[22px] md:text-[48px] font-rajdhani font-bold text-center'>Inspiring The World One Project</p>
            <p className='text-[16px] font-rubik text-gray1 text-center mb-7.5 '>Business consulting consultants provide expert advice and guida businesses to help <br className='hidden md:inline' />them improve their performance, efficiency, and organizational</p>
            </div>

            <div className='flex flex-col md:flex-row gap-5 md:gap-0 mt-15'>
                <div className='w-full md:w-1/2 '>
                <div className={`py-[34px] px-[38px] rounded-xl mb-5 ${togglevalue? 'bg-cardBG':' bg-[#F4F4F4] border-r-2 border-b-2 border-red1'}`}>
                    <h4 className='mb-[22px] text-[24px] font-rajdhani font-bold'> 01.A Portfolio of Creativity</h4>
                    <p className='text-gray1'>Business consulting consultants provide expert advice and guida the a <br /> businesses to help theme their performance efficiency</p>
                </div>

                <div className={`py-[34px] px-[38px] rounded-xl mb-5 ${togglevalue? 'bg-cardBG':' bg-[#F4F4F4] border-r-2 border-b-2 border-red1'}`}>
                    <h4 className='mb-[22px] text-[24px] font-rajdhani font-bold'> 02. My Portfolio of Innovation</h4>
                    <p className='text-gray1'>My work is driven by the belief that thoughtful design and strategic <br /> planning can empower brands, transform businesses</p>
                </div>
                <div className={`py-[34px] px-[38px] rounded-xl mb-5 ${togglevalue? 'bg-cardBG':' bg-[#F4F4F4] border-r-2 border-b-2 border-red1'}`}>
                    <h4 className='mb-[22px] text-[24px] font-rajdhani font-bold'> 03. A Showcase of My Projects</h4>
                    <p className='text-gray1'>In this portfolio, youll find a curated selection of projects that highlight <br />my skills in Main Areas, e.g., responsive web design</p>
                </div>

            </div>

            <div className='w-full md:w-1/2'>
                <img src={rightImg} alt="" />
            </div>
            </div>
        </div>
    );
};

export default LatestService;