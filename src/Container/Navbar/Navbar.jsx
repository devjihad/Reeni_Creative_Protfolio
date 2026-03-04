import React from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import logo from "../../assets/logo.png"
import twiter from "../../assets/twitter.png"
import facebook from "../../assets/facebook.png"
import linkdin from "../../assets/linkdin.png"
import burger from "../../assets/burger.png"
import instagram from "../../assets/instagram.png"
const Navbar = () => {
    return (
        <div className='container flex justify-between text-white'>
            <img src={logo} alt="" />
            <ul className='flex gap-5 items-center'>
                <li>Home</li>
                <li>About</li>
                <li className='flex items-center'>Service <MdOutlineKeyboardArrowDown/></li>
                <li className='flex items-center'>Blog <MdOutlineKeyboardArrowDown/></li>
                <li className='flex items-center'>Project <MdOutlineKeyboardArrowDown/></li>
                <li>Contact</li>
            </ul>
            <div className='flex items-center'>
                <img src={twiter} alt="" />
                <img src={linkdin} alt="" />
                <img src={instagram} alt="" />
                <img src={facebook} alt="" />
                <img src={burger} alt="" />
            </div>

        </div>
    );
};

export default Navbar;