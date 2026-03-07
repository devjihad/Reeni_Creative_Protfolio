import React, { useContext, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import logo from "../../assets/logo.png"
import blacklogo from '../../assets/blacklogo.png'
import { FaInstagram } from "react-icons/fa6";
import { TfiFacebook } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { contextData } from '../../Context/Context';



const Navbar = () => {
    const {togglevalue, settogglevalue} = useContext(contextData)
    console.log(togglevalue)

    const [value, setvalue] =useState(true)
    console.log(value)
    const toggle =()=>{
        setvalue(!value)
    }
    const toggletheme =()=>{
        settogglevalue(!togglevalue)
    }
    return (
        <>
        {/* // LARGE DEVICE */}
        <div className={`${togglevalue ? "bg-black1 text-white " :"bg-[#F4F4F4] text-black"}`}>
            <div className='px-5 md:px-0 container flex justify-between   py-3  '>
            {
                togglevalue? <img src={logo} alt="" className='h-10 '/>: <img src={blacklogo} alt="" className='h-10 '/>
            }
            <ul className='flex flex-col md:flex-row gap-4 items-center text-[16px] font-rajdhani font-bold '>
                <li>Home</li>
                <li>About</li>
                <li className='flex items-center'>Service <MdOutlineKeyboardArrowDown/></li>
                <li className='flex items-center'>Blog <MdOutlineKeyboardArrowDown/></li>
                <li className='flex items-center'>Project <MdOutlineKeyboardArrowDown/></li>
                <li>Contact</li>
            </ul>
            <div className=' hidden md:flex items-center gap-2 '>
                <FaInstagram className={`${togglevalue ? 'p-1.5 bg-stone-800 rounded-full w-6 h-6' : 'p-1.5 bg-gray-200 rounded-full w-6 h-6'}`}/>
                <TfiFacebook className={`${togglevalue ? 'p-1.5 bg-stone-800 rounded-full w-6 h-6' : 'p-1.5 bg-gray-200 rounded-full w-6 h-6'}`}/>
                <FaLinkedinIn className={`${togglevalue ? 'p-1.5 bg-stone-800 rounded-full w-6 h-6' : 'p-1.5 bg-gray-200 rounded-full w-6 h-6'}`}/>
                <FaTwitter className={`${togglevalue ? 'p-1.5 bg-stone-800 rounded-full w-6 h-6' : 'p-1.5 bg-gray-200 rounded-full w-6 h-6'}`}/>
                <RxHamburgerMenu className='p-1.5 bg-red1 rounded-full w-6 h-6' onClick={()=>toggletheme()}/>
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