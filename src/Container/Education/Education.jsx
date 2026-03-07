import React, { useContext } from 'react';
import line from '../../assets/custom-line.png'
import leftImg from '../../assets/Container.png'
import team from '../../assets/Tpm Our Supported Company Area Start.png'
import { contextData } from '../../Context/Context';
const Education = () => {
    const {togglevalue, settogglevalue} = useContext(contextData)
    return (
        <div className='container mt-30 px-5 md:px-0'>
            <h4 className='mb-7.5 text-[32px] font-rajdhani font-bold flex items-center gap-5'>Education <img src={line} alt="" /></h4>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-7.5'>
                <div className={`px-9.5 py-12  rounded-xl ${togglevalue? 'bg-cardBG':' bg-[#F4F4F4] border-r-2 border-b-2 border-red1'}`}>
                    <p className='text-[16px] font-rubik'>Trainer Marketing</p>
                    <p className='text-[18px] font-rajdhani my-1.5'>2005-2009</p>
                    <p className='text-gray1'>A personal portfolio is a curated collection of an individual's professional work, showcasing their skills, experience A personal portfolio.</p>
                </div>

                <div className={`px-9.5 py-12  rounded-xl ${togglevalue? 'bg-cardBG':' bg-[#F4F4F4] border-r-2 border-b-2 border-red1'}`}>
                    <p className='text-[16px] font-rubik'>Trainer Marketing</p>
                    <p className='text-[18px] font-rajdhani my-1.5'>2005-2009</p>
                    <p className='text-gray1'>A personal portfolio is a curated collection of an individual's professional work, showcasing their skills, experience A personal portfolio.</p>
                </div>

                <div className={`px-9.5 py-12  rounded-xl ${togglevalue? 'bg-cardBG':' bg-[#F4F4F4] border-r-2 border-b-2 border-red1'}`}>
                    <p className='text-[16px] font-rubik'>Trainer Marketing</p>
                    <p className='text-[18px] font-rajdhani my-1.5'>2005-2009</p>
                    <p className='text-gray1'>A personal portfolio is a curated collection of an individual's professional work, showcasing their skills, experience A personal portfolio.</p>
                </div>
                
                <div className={`px-9.5 py-12  rounded-xl ${togglevalue? 'bg-cardBG':' bg-[#F4F4F4] border-r-2 border-b-2 border-red1'}`}>
                    <p className='text-[16px] font-rubik'>Trainer Marketing</p>
                    <p className='text-[18px] font-rajdhani my-1.5'>2005-2009</p>
                    <p className='text-gray1'>A personal portfolio is a curated collection of an individual's professional work, showcasing their skills, experience A personal portfolio.</p>
                </div>

            </div>

            <div className='flex flex-col md:flex-row gap-7.5 mt-18.25'>
                <div className='w-full md:w-1/2'>
                    <img src={leftImg} alt=""/>
                </div>

                <div className='w-full md:w-1/2 md:pl-10 md:pr-34.5'>
                    <h4 className=' text-[32px] font-rajdhani font-bold flex items-center gap-5'>Experience <img src={line} alt="" /></h4>
                    <div className='my-7.5'>
                        <p className='text-[16px] text-red1 font-rubik font-medium'>experience</p>
                        <h4 className='text-[24px] font-rajdhani font-bold '>Fatima Asrafy</h4>
                        <p className='text-[18px] text-[#FFFFFF] font-rajdhani font-medium'>UI/UX Designen</p>
                        <p className='mt-2 text-gray1 text-[16px] font-rubik'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum desi dolore eu fugiat nulla pariatu Duis aute irure</p>
                    </div>

                    <div>
                        <p className='text-[16px] text-red1 font-rubik font-medium'>experience</p>
                        <h4 className='text-[24px] font-rajdhani font-bold '>Fatima Asrafy</h4>
                        <p className='text-[18px] text-[#FFFFFF] font-rajdhani font-medium'>UI/UX Designen</p>
                        <p className='mt-2 text-gray1 text-[16px] font-rubik'>Interested in working together? Lets bring your ideas tolife! Contact me, and lets start building something.</p>
                    </div>
                </div>
            </div>
            <img src={team} alt=""  className='py-30 hidden md:inline'/>
        </div>
    );
};

export default Education;