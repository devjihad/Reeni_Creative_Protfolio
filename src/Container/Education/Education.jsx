import React from 'react';
import line from '../../assets/custom-line.png'
const Education = () => {
    return (
        <div className='container mt-30'>
            <h4 className='mb-7.5 text-[32px] font-rajdhani font-bold flex items-center gap-5'>Education <img src={line} alt="" /></h4>

            <div className='grid grid-cols-2 gap-7.5'>
                <div className='px-9.5 py-12 bg-cardBG rounded-xl'>
                    <p className='text-[16px] font-rubik'>Trainer Marketing</p>
                    <p className='text-[18px] font-rajdhani my-1.5'>2005-2009</p>
                    <p className='text-gray1'>A personal portfolio is a curated collection of an individual's professional work, showcasing their skills, experience A personal portfolio.</p>
                </div>

                <div className='px-9.5 py-12 bg-cardBG rounded-xl'>
                    <p className='text-[16px] font-rubik'>Trainer Marketing</p>
                    <p className='text-[18px] font-rajdhani my-1.5'>2005-2009</p>
                    <p className='text-gray1'>A personal portfolio is a curated collection of an individual's professional work, showcasing their skills, experience A personal portfolio.</p>
                </div>

                <div className='px-9.5 py-12 bg-cardBG rounded-xl'>
                    <p className='text-[16px] font-rubik'>Trainer Marketing</p>
                    <p className='text-[18px] font-rajdhani my-1.5'>2005-2009</p>
                    <p className='text-gray1'>A personal portfolio is a curated collection of an individual's professional work, showcasing their skills, experience A personal portfolio.</p>
                </div>
                
                <div className='px-9.5 py-12 bg-cardBG rounded-xl'>
                    <p className='text-[16px] font-rubik'>Trainer Marketing</p>
                    <p className='text-[18px] font-rajdhani my-1.5'>2005-2009</p>
                    <p className='text-gray1'>A personal portfolio is a curated collection of an individual's professional work, showcasing their skills, experience A personal portfolio.</p>
                </div>

            </div>
        </div>
    );
};

export default Education;