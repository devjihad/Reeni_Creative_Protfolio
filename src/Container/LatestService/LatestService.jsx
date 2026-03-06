import React from 'react';
import rightImg from '../../assets/Margin.png'
const LatestService = () => {
    return (
        <div className='container mt-30 '>
            <p className='text-[16px] text-red1 text-center font-rubik '>LATEST SERVICE</p>
            <p className='text-[48px] font-rajdhani font-bold text-center'>Inspiring The World One Project</p>
            <p className='text-[16px] font-rubik text-gray1 text-center mb-7.5 '>Business consulting consultants provide expert advice and guida businesses to help <br /> them improve their performance, efficiency, and organizational</p>

            <div className='flex justify-be'>
                <div className='w-1/2 '>
                <div className='py-[34px] px-[38px] rounded-xl bg-cardBG  mb-5'>
                    <h4 className='mb-[22px] text-[24px] font-rajdhani font-bold'> 01.A Portfolio of Creativity</h4>
                    <p className='text-gray1'>Business consulting consultants provide expert advice and guida the a <br /> businesses to help theme their performance efficiency</p>
                </div>

                <div className='py-[34px] px-[38px] rounded-xl bg-cardBG mb-5'>
                    <h4 className='mb-[22px] text-[24px] font-rajdhani font-bold'> 02. My Portfolio of Innovation</h4>
                    <p className='text-gray1'>My work is driven by the belief that thoughtful design and strategic <br /> planning can empower brands, transform businesses</p>
                </div>
                <div className='py-[34px] px-[38px] rounded-xl bg-cardBG '>
                    <h4 className='mb-[22px] text-[24px] font-rajdhani font-bold'> 03. A Showcase of My Projects</h4>
                    <p className='text-gray1'>In this portfolio, youll find a curated selection of projects that highlight <br />my skills in Main Areas, e.g., responsive web design</p>
                </div>

            </div>

            <div className='w-1/2'>
                <img src={rightImg} alt="" />
            </div>
            </div>
        </div>
    );
};

export default LatestService;