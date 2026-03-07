import React, { useContext, version } from 'react';
import img1 from '../../assets/Container1.png'
import img2 from '../../assets/Container2.png'
import img3 from '../../assets/Container3.png'
import img4 from '../../assets/Container4.png'
import img6 from '../../assets/6.png'
import icon from '../../assets/Link.png'
import vector from '../../assets/7.png'
import vector1 from '../../assets/8.png'
import vector2 from '../../assets/9.png'
import { IoIosArrowForward } from "react-icons/io";
import { contextData } from '../../Context/Context';
import border from '../../assets/Border.png'
import border1 from '../../assets/Border-1.png'
import border2 from '../../assets/Border-2.png'

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
                    <img src={img1} alt="" className={`p-5 border rounded-xl ${togglevalue? 'border-gray-600 ' :'border-[#D9DDE0]'}`}/>
                    
                    <div className='text-[24px] font-rajdhani font-bold mt-8 mb-1 flex justify-between '> 
                        <h4 >My Journey as a Creator </h4>
                        {
                            togglevalue ? <img src={icon} alt="" /> : <img src={img6} alt="" />
                        }
                    </div>
                    <p className='text-[16px] font-rubik  text-gray1'>Development coaches</p>
                    
                </div>

                <div className='mt-25'>
                    <img src={img2} alt="" className={`p-5 border rounded-xl ${togglevalue? 'border-gray-600 ' :'border-[#D9DDE0]'}`}/>
                    
                     <div className='text-[24px] font-rajdhani font-bold mt-8 mb-1 flex justify-between '> 
                        <h4 >My Personal Protfolio </h4>
                        {
                            togglevalue ? <img src={icon} alt="" /> : <img src={img6} alt="" />
                        }
                    </div>
                    <p className='text-[16px] font-rubik  text-gray1'>Development coaches</p>
                </div>

                <div className=''>
                    <img src={img3} alt="" className={`p-5 border rounded-xl ${togglevalue? 'border-gray-600 ' :'border-[#D9DDE0]'}`}/>
                    
                     <div className='text-[24px] font-rajdhani font-bold mt-8 mb-1 flex justify-between '> 
                        <h4 >My Personal Innovation </h4>
                        {
                            togglevalue ? <img src={icon} alt="" /> : <img src={img6} alt="" />
                        }
                    </div>
                    <p className='text-[16px] font-rubik  text-gray1'>App Development</p>
                    
                </div>

                <div className='mt-25'>
                    <img src={img4} alt="" className={`p-5 border rounded-xl ${togglevalue? 'border-gray-600 ' :'border-[#D9DDE0]'}`}/>
                    
                     <div className='text-[24px] font-rajdhani font-bold mt-8 mb-1 flex justify-between '> 
                        <h4 >A Protfolio  of Crafting & Passion </h4>
                        {
                            togglevalue ? <img src={icon} alt="" /> : <img src={img6} alt="" />
                        }
                    </div>
                    <p className='text-[16px] font-rubik  text-gray1'>Business Development</p>
                    
                </div>

            </div>

            <div className='mt-30 '>
            <p className='text-[16px] text-red1  font-rubik '>MY SKILL</p>
            <p className='text-[22px] md:text-[48px] font-rajdhani font-bold '>Elevated Designs Personalized <br />the best Experiences</p> 

            <div className='pb-25'>
                <div className='pt-10.75 pb-8 md:px-20 hover:bg-red1 flex flex-col md:flex-row justify-between items-center rounded-lg '>
                   <div className='h-17.5 w-17.5  '>
                    {
                    togglevalue?  <img src={vector} alt="" />:  <img src={border} alt="" />
                   }
                   </div>
                    <div>
                        <p className='text-[32px] font-rajdhani font-bold '>UI/UX DESIGN</p>
                        <p className='text-[18px] font-rajdhani'>21 Done</p>
                    </div>
                    <p className='font-rubik text-[16px] leading-7.5'>My work is driven by the belief that thoughtful design and <br />strategic planning can empower brands strategic planning <br />can empower brands</p>
                    <p className='flex items-center gap-1 font-rajdhani'>READ MORE <IoIosArrowForward/></p>
                </div>

                <div className='pt-10.75 pb-8 md:px-20 hover:bg-red1 flex flex-col md:flex-row justify-between items-center rounded-lg my-7.5'>
                    <div className='h-17.5 w-17.5  '>
                    {
                    togglevalue?  <img src={vector1} alt="" />:  <img src={border1} alt="" />
                   }
                   </div>
                    <div>
                        <p className='text-[32px] font-rajdhani font-bold '>UI/UX DESIGN</p>
                        <p className='text-[18px] font-rajdhani'>21 Done</p>
                    </div>
                    <p className='font-rubik text-[16px] leading-7.5'>My work is driven by the belief that thoughtful design and <br />strategic planning can empower brands strategic planning <br />can empower brands</p>
                    <p className='flex items-center gap-1 font-rajdhani'>READ MORE <IoIosArrowForward/></p>
                </div>
                
                <div className='pt-10.75 pb-8 md:px-20 hover:bg-red1 flex flex-col md:flex-row justify-between items-center rounded-lg '>
                    <div className='h-17.5 w-17.5  '>
                    {
                    togglevalue?  <img src={vector2} alt="" />:  <img src={border2} alt="" />
                    }
                   </div>
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