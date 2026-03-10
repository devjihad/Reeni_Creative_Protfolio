import React, { useContext } from 'react';
import { IoArrowForward } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import testimonial from '../../assets/testimonial-icon.png'
import img1 from '../../assets/blog1.jpg'
import img2 from '../../assets/blog2.jpg'
import img3 from '../../assets/blog3.jpg'

import right from '../../assets/right.png'
import person from '../../assets/15.png'
import person1 from '../../assets/16.png'
import date from '../../assets/14.png'
import date1 from '../../assets/17.png'
import { contextData } from '../../Context/Context';
const PricePlan = () => {
    const {togglevalue, settogglevalue} = useContext(contextData)
    return (
        <div className='container  mt-30 px-5 md:px-0 '>
            <div>
            <p className='text-[16px] text-red1 text-center font-rubik '>LATEST SERVICE</p>
            <p className='text-[22px] md:text-[48px] font-rajdhani font-bold text-center'>Enhancing Collaboration <br /> between Remote</p>
            </div>
            {/* FIRST SECTION */}

            <div className='mt-13 flex flex-col md:flex-row  justify-between gap-7.5 '>
                <div className={`p-9.5 rounded-xl md:w-102 h-119.5 mt-11 ${togglevalue? 'bg-cardBG':' bg-[#F4F4F4] border-r-2 border-b-2 border-red1'}`}>
                    <p className='font-rajdhani font-bold text-[18px]'>Starter</p>
                    <p className='font-rajdhani font-bold text-[48px]'>$ 5.00</p>
                    <p className='font-rajdhani font-bold text-[18px] mb-17'>Per Month</p>
                

                    <p className={`text-[16px] font-rubik flex items-center gap-2 mb-4 ${togglevalue?'text-gray1':'text-gray2'}`}><img src={right} alt="" /> 5 Social Media Account</p>
                    <p className={`text-[16px] font-rubik flex items-center gap-2 mb-4 ${togglevalue?'text-gray1':'text-gray2'}`}><img src={right} alt="" /> Free Platform Access</p>
                    <p className={`text-[16px] font-rubik flex items-center gap-2 mb-9.5 ${togglevalue?'text-gray1':'text-gray2'}`}><img src={right} alt="" /> 24/7 Support</p>

                    <button className={`flex items-center gap-1 py-2 px-4 rounded-4xl border-2 border-gray-700  hover:bg-red1 hover:text-white hover:border-0  ${togglevalue? 'text-gray1 hover:text-white':'text-black hover:text-white border-gray1'}`}>Get Started <IoArrowForward/></button>

                </div>

                <div className={`p-9.5  rounded-xl md:w-101 h-141 ${togglevalue? 'bg-cardBG':' bg-[#F4F4F4] border-r-2 border-b-2 border-red1'}`}>
                    <p className='font-rajdhani font-bold text-[18px]'>Premium</p>
                    <p className='font-rajdhani font-bold text-[48px]'>$ 230.00</p>
                    <p className='font-rajdhani font-bold text-[18px] mb-17'>Per Month</p>
                    

                     <p className={`text-[16px] font-rubik flex items-center gap-2 mb-4 ${togglevalue?'text-gray1':'text-gray2'}`}><img src={right} alt="" /> 5 Social Media Account</p>

                    <p className={`text-[16px] font-rubik flex items-center gap-2 mb-4 ${togglevalue?'text-gray1':'text-gray2'}`}><img src={right} alt="" /> Free Platform Access</p>

                    <p className={`text-[16px] font-rubik flex items-center gap-2 mb-4 ${togglevalue?'text-gray1':'text-gray2'}`}><img src={right} alt="" /> 24/7 Support</p>

                    <p className={`text-[16px] font-rubik flex items-center gap-2 mb-4 ${togglevalue?'text-gray1':'text-gray2'}`}><img src={right} alt="" /> Life Time Support </p>
                    <p className={`text-[16px] font-rubik flex items-center gap-2 mb-9.5 ${togglevalue?'text-gray1':'text-gray2'}`}><img src={right} alt="" /> Marketing Platform</p>

                    <button className={`flex items-center gap-1 py-2 px-4 rounded-4xl border-2 border-gray-700  hover:bg-red1 hover:text-white hover:border-0  ${togglevalue? 'text-gray1 hover:text-white':'text-black hover:text-white border-gray1'}`}>Get Started <IoArrowForward/></button>

                </div>

                <div className={`p-9.5 rounded-xl md:w-102 h-119.5 mt-11 ${togglevalue? 'bg-cardBG':' bg-[#F4F4F4] border-r-2 border-b-2 border-red1'}`}>
                    <p className='font-rajdhani font-bold text-[18px]'>Basic</p>
                    <p className='font-rajdhani font-bold text-[48px]'>$ 30.00</p>
                    <p className='font-rajdhani font-bold text-[18px] mb-17'>Per Month</p>
                    

                   <p className={`text-[16px] font-rubik flex items-center gap-2 mb-4 ${togglevalue?'text-gray1':'text-gray2'}`}><img src={right} alt="" /> 5 Social Media Account</p>
                    <p className={`text-[16px] font-rubik flex items-center gap-2 mb-4 ${togglevalue?'text-gray1':'text-gray2'}`}><img src={right} alt="" /> Free Platform Access</p>
                    <p className={`text-[16px] font-rubik flex items-center gap-2 mb-9.5 ${togglevalue?'text-gray1':'text-gray2'}`}><img src={right} alt="" /> 24/7 Support</p>

                    <button className={`flex items-center gap-1 py-2 px-4 rounded-4xl border-2 border-gray-700  hover:bg-red1 hover:text-white hover:border-0  ${togglevalue? 'text-gray1 hover:text-white':'text-black hover:text-white border-gray1'}`}>Get Started <IoArrowForward/></button>

                </div>
            </div>

            {/* SECOUND SECTION  */}
            <div>
                <div className='mt-30'>
                    <p className='text-[16px] text-red1 text-center font-rubik '>LATEST SERVICE</p>
                    <p className='text-[22px] md:text-[48px] font-rajdhani font-bold text-center'>Enhancing Collaboration <br className='hidden md:inline'/> between Remote</p>
                </div>

                 <div className='flex flex-col md:flex-row gap-7.5 mt-12.5'>
                    <div className={`p-9.5 rounded-xl  ${togglevalue? 'bg-cardBG':' bg-[#F4F4F4] '}`}>
                        <img src={testimonial} alt=""  className='mb-10.5'/>
                        <p className={`text-[18px] font-rubik ${togglevalue?'text-gray1':'text-gray2'}`}>A personal portfolio is a curated collection of an individual's professional work, showcasing their skilA personal portfolio is acurated collection of an individual's professional work,showcasing their skills,</p>
                        <p className='text-[18px] font-rajdhani font-bold mt-9'>Cameron Willianson</p>
                        <p className={`text-[14px] font-rubik mt-3 ${togglevalue?'text-gray1':'text-gray2'}`}>UI/UX Designer</p>
                    </div>

                    <div className={`p-9.5 rounded-xl  ${togglevalue? 'bg-cardBG':' bg-[#F4F4F4] '}`}>
                        <img src={testimonial} alt=""  className='mb-10.5'/>
                        <p className={`text-[18px] font-rubik ${togglevalue?'text-gray1':'text-gray2'}`}>A personal portfolio is a curated collection of an individual's professional work, showcasing their skilA personal portfolio is acurated collection of an individual's professional work,showcasing their skills,</p>
                        <p className='text-[18px] font-rajdhani font-bold mt-9'>Lasle Alexender</p>
                        <p className={`text-[14px] font-rubik mt-3 ${togglevalue?'text-gray1':'text-gray2'}`}>UI/UX Designer</p>
                    </div>

                </div>
            </div>

            {/* THIRD SECTION  */}
            <div className='py-30'>
                <div>
                    <p className='text-[16px] text-red1 text-center font-rubik '>Blog & News</p>
                    <p className='text-[22px] md:text-[48px] font-rajdhani font-bold text-center'>Elevating Personal Branding the <br className='hidden md:inline' />through Powerful Portfolios</p>
                </div>
                <div className='mt-12 flex flex-col md:flex-row gap-7.5'>
                    <div className={`border  rounded-3xl relative ${togglevalue ? 'border-gray-700' : 'border-gray1'}`}>
                       <img src={img1} alt="" className='rounded-3xl'/>
                        <h4 className='text-[24px] font-rajdhani font-bold p-5 '>Lets bring your ideas to life! <br />Contact me, and lets</h4>
                        <button className={`text-[13px] font-rubik px-7.5 pb-7.5 flex gap-1 items-center${togglevalue ? 'text-gray1' : 'text-gray2'}`}>READ MORE <IoIosArrowForward/></button>

                        <div className={`flex items-center gap-1 py-1 px-2 absolute top-5 left-3 rounded-xl ${togglevalue ? 'bg-[#141414]':'bg-white'}`}>
                            {togglevalue? <img src={person1} alt="" />: <img src={person} alt="" />}
                            <p > Mesbah   </p>
                            {togglevalue? <img src={date1} alt="" />:<img src={date} alt="" />}
                            <p>April 10</p>
                            
                        </div>

                    </div>

                    <div className={`border  rounded-3xl relative ${togglevalue ? 'border-gray-700' : 'border-gray1'}`}>
                       <img src={img2} alt=""  className='rounded-3xl'/>
                        <h4 className='text-[24px] font-rajdhani font-bold p-5 '>Lets bring your ideas to life! <br />Contact me, and lets</h4>
                        <button className={`text-[13px] font-rubik px-7.5 pb-7.5 flex gap-1 items-center${togglevalue ? 'text-gray1' : 'text-gray2'}`}>READ MORE <IoIosArrowForward/></button>

                        <div className={`flex items-center gap-1 py-1 px-2 absolute top-5 left-3 rounded-xl ${togglevalue ? 'bg-[#141414]':'bg-white'}`}>
                            {togglevalue? <img src={person1} alt="" />: <img src={person} alt="" />}
                            <p > Mesbah   </p>
                            {togglevalue? <img src={date1} alt="" />:<img src={date} alt="" />}
                            <p>April 10</p>
                            
                        </div>
                    </div>
                    <div className={`border  rounded-3xl relative ${togglevalue ? 'border-gray-700' : 'border-gray1'}`}>
                       <img src={img3} alt=""  className='rounded-3xl'/>
                        <h4 className='text-[24px] font-rajdhani font-bold p-5 '>Lets bring your ideas to life! <br />Contact me, and lets</h4>
                        <button className={`text-[13px] font-rubik px-7.5 pb-7.5 flex gap-1 items-center${togglevalue ? 'text-gray1' : 'text-gray2'}`}>READ MORE <IoIosArrowForward/></button>

                        <div className={`flex items-center gap-1 py-1 px-2 absolute top-5 left-3 rounded-xl ${togglevalue ? 'bg-[#141414]':'bg-white'}`}>
                            {togglevalue? <img src={person1} alt="" />: <img src={person} alt="" />}
                            <p > Mesbah   </p>
                            {togglevalue? <img src={date1} alt="" />:<img src={date} alt="" />}
                            <p>April 10</p>
                            
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default PricePlan;