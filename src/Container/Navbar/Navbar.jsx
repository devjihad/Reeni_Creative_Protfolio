import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import logo from "../../assets/logo.png"
import { FaInstagram } from "react-icons/fa6";
import { TfiFacebook } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";



const Navbar = () => {
    const [value, setvalue] =useState(true)
    console.log(value)
    const toggle =()=>{
        setvalue(!value)
    }
    return (
        <>
        {/* // LARGE DEVICE */}
        <div className='bg-black2 hidden md:inline'>
            <div className='px-5 md:px-0 md:container flex justify-between text-white  py-3  '>
            <img src={logo} alt="" className='h-10 '/>
            <ul className='flex flex-col md:flex-row gap-4 items-center text-[16px] font-rajdhani font-bold '>
                <li>Home</li>
                <li>About</li>
                <li className='flex items-center'>Service <MdOutlineKeyboardArrowDown/></li>
                <li className='flex items-center'>Blog <MdOutlineKeyboardArrowDown/></li>
                <li className='flex items-center'>Project <MdOutlineKeyboardArrowDown/></li>
                <li>Contact</li>
            </ul>
            <div className=' hidden md:flex items-center gap-2 '>
                <FaInstagram className='p-1.5 bg-stone-800 rounded-full w-6 h-6'/>
                <TfiFacebook className='p-1.5 bg-stone-800 rounded-full w-6 h-6'/>
                <FaLinkedinIn className='p-1.5 bg-stone-800 rounded-full w-6 h-6'/>
                <FaTwitter  className='p-1.5 bg-stone-800 rounded-full w-6 h-6'/>
                <RxHamburgerMenu className='p-1.5 bg-red1 rounded-full w-6 h-6'/>
            </div>

            <RxHamburgerMenu className='p-1.5 bg-red1 rounded-full w-6 h-6 md:hidden' onClick={()=>toggle()}/>

        </div>
        </div>
        {/* SMOLL DEVICE */}
        <div className='bg-black2 md:hidden'>
            
            <div className='flex p-5 justify-between'>
                <img src={logo} alt="" className='h-10 '/>


            <RxHamburgerMenu className='p-1.5 bg-red1 rounded-full w-6 h-6 md:hidden' onClick={()=>toggle()}/>
            </div>
           <div className={`${value ? 'hidden' : 'inline'}`}>
             <ul className=' text-[16px] font-rajdhani font-bold bg-gray1 py-5 flex flex-col justify-center items-center gap-3'>
                <li>Home</li>
                <li>About</li>
                <li className='flex items-center'>Service <MdOutlineKeyboardArrowDown/></li>
                <li className='flex items-center'>Blog <MdOutlineKeyboardArrowDown/></li>
                <li className='flex items-center'>Project <MdOutlineKeyboardArrowDown/></li>
                <li>Contact</li>
            </ul>
           </div>    
        </div>
        </>
    );
};

export default Navbar;