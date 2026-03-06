import React from 'react';
import line from '../../assets/custom-line.png'
const Skill = () => {
    return (
        <div className='container mt-30 flex justify-between gap-7.5'>
            <div className='w-1/2 '>
                <h4 className='mb-7.5 text-[32px] font-rajdhani font-bold flex items-center gap-5 '>Design Skill <img src={line} alt="" /></h4>
                <div className='mb-7.5 '>
                    <p className='text-[14px] font-rubik pb-[15px] flex items-center  '>PHOTOSHOP <span className='ml-[80%]'>100%</span></p>
                    <hr className='w-full bg-red1 h-1.5 outline-0 border-0 rounded-xl '/>
                </div>
                <div className='mb-7.5 '>
                    <p className='text-[14px] font-rubik pb-[15px] flex items-center  '>FIGMA <span className='ml-[85%]'>95%</span></p>
                    <hr className='w-[95%] bg-red1 h-1.5 outline-0 border-0 rounded-xl '/>
                </div>
                <div className='mb-7.5 '>
                    <p className='text-[14px] font-rubik pb-[15px] flex items-center  '>ADOBE DX <span className='ml-[45%]'>60%</span></p>
                    <hr className='w-[60%] bg-red1 h-1.5 outline-0 border-0 rounded-xl '/>
                </div>
                <div className='mb-7.5 '>
                    <p className='text-[14px] font-rubik pb-[15px] flex items-center  '>ADOBE ILLUSTRATOR <span className='ml-[53%]'>80%</span></p>
                    <hr className='w-[80%] bg-red1 h-1.5 outline-0 border-0 rounded-xl '/>
                </div>
                
                
            </div>


            <div className='w-1/2 '>
                <h4 className='mb-7.5 text-[32px] font-rajdhani font-bold flex items-center gap-5'>Development  Skill <img src={line} alt="" /></h4>
                <div className='mb-7.5 '>
                    <p className='text-[14px] font-rubik pb-[15px] flex items-center  '>HTML <span className='ml-[80%]'>100%</span></p>
                    <hr className='w-full bg-red1 h-1.5 outline-0 border-0 rounded-xl '/>
                </div>
                <div className='mb-7.5 '>
                    <p className='text-[14px] font-rubik pb-[15px] flex items-center  '>CSS <span className='ml-[85%]'>95%</span></p>
                    <hr className='w-[95%] bg-red1 h-1.5 outline-0 border-0 rounded-xl '/>
                </div>
                <div className='mb-7.5 '>
                    <p className='text-[14px] font-rubik pb-[15px] flex items-center  '>JAVASCRIPT <span className='ml-[45%]'>60%</span></p>
                    <hr className='w-[60%] bg-red1 h-1.5 outline-0 border-0 rounded-xl '/>
                </div>
                <div className='mb-7.5 '>
                    <p className='text-[14px] font-rubik pb-[15px] flex items-center  '>PHP/WORDPRESS <span className='ml-[53%]'>80%</span></p>
                    <hr className='w-[80%] bg-red1 h-1.5 outline-0 border-0 rounded-xl '/>
                </div>
                
                
            </div>
            
        </div>
    );
};

export default Skill;