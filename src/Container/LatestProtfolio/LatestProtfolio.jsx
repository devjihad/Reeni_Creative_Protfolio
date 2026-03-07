import React, { useContext, version } from 'react';
import img1 from '../../assets/Container1.png'
import img2 from '../../assets/Container2.png'
import img3 from '../../assets/Container3.png'
import img4 from '../../assets/Container4.png'
import icon from '../../assets/Link.png'
import vector from '../../assets/Vector.png'
import vector1 from '../../assets/Vector-1.png'
import vector2 from '../../assets/Vector-2.png'
import { IoIosArrowForward } from "react-icons/io";
import { contextData } from '../../Context/Context';

const LatestProtfolio = () => {
    const {togglevalue, settogglevalue} = useContext(contextData)
    return (
        <div className={` rounded-xl ${togglevalue? 'bg-cardBG':' bg-[#F4F4F4]'}`}>
        <div className='container px-5 md:px-0'>

            <div className='pt-20  md:pt-25'>
            <p className='text-[16px] text-red1 text-center font-rubik '>LATEST PROTFOLIO</p>
            <p className='text-[22px] md:text-[48px] font-rajdhani font-bold text-center'>Transforming Ideas into Exceptional</p>
            <p className='text-[16px] font-rubik text-gray1 text-center mb-7.5 '>Business consulting consultants provide expert advice and guida businesses to help <br className='hidden md:inline'/>them improve their performance, efficiency, and organizational</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12.5 mt-15'>
                <div className=''>
                    <img src={img1} alt="" className='p-5 border border-gray-600 rounded-xl'/>
                    
                    <h4 className='text-[24px] font-raj font-bold mt-8 mb-1 flex justify-between'>My Journey as a Creator <img src={icon} alt="" /></h4>
                    <p className='text-[16px] font-rubik  text-gray1'>Development coaches</p>
                    
                </div>

                <div className='mt-25'>
                    <img src={img2} alt="" className='p-5 border border-gray-600 rounded-xl'/>
                    
                    <h4 className='text-[24px] font-raj font-bold mt-8 mb-1 flex justify-between'>My Personal Protfolio <img src={icon} alt="" /></h4>
                    <p className='text-[16px] font-rubik  text-gray1'>Development coaches</p>
                </div>

                <div className=''>
                    <img src={img3} alt="" className='p-5 border border-gray-600 rounded-xl'/>
                    
                    <h4 className='text-[24px] font-raj font-bold mt-8 mb-1 flex justify-between'>My Personal Innovation <img src={icon} alt="" /></h4>
                    <p className='text-[16px] font-rubik  text-gray1'>App Development</p>
                    
                </div>

                <div className='mt-25'>
                    <img src={img4} alt="" className='p-5 border border-gray-600 rounded-xl'/>
                    
                    <h4 className='text-[24px] font-raj font-bold mt-8 mb-1 flex justify-between'>A Protfolio  of Craftify & Passion <img src={icon} alt="" /></h4>
                    <p className='text-[16px] font-rubik  text-gray1'>Business Development</p>
                    
                </div>

            </div>

            <div className='mt-30 '>
            <p className='text-[16px] text-red1  font-rubik '>MY SKILL</p>
            <p className='text-[22px] md:text-[48px] font-rajdhani font-bold '>Elevated Designs Personalized <br />the best Experiences</p> 

            <div className='pb-25'>
                <div className='pt-10.75 pb-8 md:px-20 hover:bg-red1 flex flex-col md:flex-row justify-between items-center rounded-lg '>
                    <img src={vector} alt="" className='h-17.5 w-17.5 border border-gray-700 p-4 rounded-full'/>
                    <div>
                        <p className='text-[32px] font-rajdhani font-bold '>UI/UX DESIGN</p>
                        <p className='text-[18px] font-rajdhani'>21 Done</p>
                    </div>
                    <p className='font-rubik text-[16px] leading-7.5'>My work is driven by the belief that thoughtful design and <br />strategic planning can empower brands strategic planning <br />can empower brands</p>
                    <p className='flex items-center gap-1 font-rajdhani'>READ MORE <IoIosArrowForward/></p>
                </div>

                <div className='pt-10.75 pb-8 md:px-20 hover:bg-red1 flex flex-col md:flex-row justify-between items-center rounded-lg my-7.5'>
                    <img src={vector1} alt="" className='h-17.5 w-17.5 border border-gray-700 p-4 rounded-full'/>
                    <div>
                        <p className='text-[32px] font-rajdhani font-bold '>UI/UX DESIGN</p>
                        <p className='text-[18px] font-rajdhani'>21 Done</p>
                    </div>
                    <p className='font-rubik text-[16px] leading-7.5'>My work is driven by the belief that thoughtful design and <br />strategic planning can empower brands strategic planning <br />can empower brands</p>
                    <p className='flex items-center gap-1 font-rajdhani'>READ MORE <IoIosArrowForward/></p>
                </div>
                
                <div className='pt-10.75 pb-8 md:px-20 hover:bg-red1 flex flex-col md:flex-row justify-between items-center rounded-lg '>
                    <img src={vector2} alt="" className='h-17.5 w-17.5 border border-gray-700 p-4 rounded-full'/>
                    <div>
                        <p className='text-[32px] font-rajdhani font-bold '>UI/UX DESIGN</p>
                        <p className='text-[18px] font-rajdhani'>21 Done</p>
                    </div>
                    <p className='font-rubik text-[16px] leading-7.5'>My work is driven by the belief that thoughtful design and <br />strategic planning can empower brands strategic planning <br />can empower brands</p>
                    <p className='flex items-center gap-1 font-rajdhani'>READ MORE <IoIosArrowForward/></p>
                </div>
            </div>
            </div>
            
        </div>
        </div>
    );
};

export default LatestProtfolio;