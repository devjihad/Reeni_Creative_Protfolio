import React from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import logo from "../../assets/logo.png"
import { FaInstagram } from "react-icons/fa6";
import { TfiFacebook } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";



const Navbar = () => {
    return (
        <div className='container flex justify-between text-white bg-black2 py-3'>
            <img src={logo} alt="" className='h-10 '/>
            <ul className='flex gap-4 items-center text-[12px] font-rajdhani font-bold'>
                <li>Home</li>
                <li>About</li>
                <li className='flex items-center'>Service <MdOutlineKeyboardArrowDown/></li>
                <li className='flex items-center'>Blog <MdOutlineKeyboardArrowDown/></li>
                <li className='flex items-center'>Project <MdOutlineKeyboardArrowDown/></li>
                <li>Contact</li>
            </ul>
            <div className='flex items-center gap-2 '>
                <FaInstagram className='p-1.5 bg-stone-800 rounded-full w-6 h-6'/>
                <TfiFacebook className='p-1.5 bg-stone-800 rounded-full w-6 h-6'/>
                <FaLinkedinIn className='p-1.5 bg-stone-800 rounded-full w-6 h-6'/>
                <FaTwitter  className='p-1.5 bg-stone-800 rounded-full w-6 h-6'/>
                <RxHamburgerMenu className='p-1.5 bg-red1 rounded-full w-6 h-6'/>
            </div>

        </div>
    );
};

export default Navbar;