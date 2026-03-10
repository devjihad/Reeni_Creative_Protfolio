import { IoIosArrowRoundForward } from "react-icons/io";
import Mainimage from '../../assets/banner-img-3.png'
import { FaInstagram } from "react-icons/fa6";
import { TfiFacebook } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useContext } from "react";
import { contextData } from "../../Context/Context";
const Hero = () => {
    const {togglevalue, settogglevalue} = useContext(contextData)
    return (
    <div className=" container  relative mb-22.5 px-5 md:px-0 pt-10">
         <div >
            <div className="md:w-160 mx-auto md:flex md:justify-center relative z-20 "  >
                <img src={Mainimage} alt="" className="px-5 md:px-0 md:w-150 md:h-200  "/>
            </div>
            <h2 className="text-[145px] w-189 h-44 font-bold  text-outline font-rajdhani absolute  top-180 left-[650px] -translate-x-1/2 -tranlate-y-1/2 z-30  hidden md:inline    ">WEB DESIGN</h2><br />
            <h2 className="text-[212px] font-bold  text-outline2 font-rajdhani  absolute top-185 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:inline">WEBDESIGN</h2>
        </div>
        <div>
            <div className="md:absolute md:top-46.5 w-108 " >
            <h2 className="text-[38px] md:text-[90px] font-bold leading-12 md:leading-25 font-rajdhani mb-3 md:mb-5 z-40"> <span className="text-[20px] md:text-[28px] font-bold  leading-20">HELLO I'M <br /> </span>Brooklyn Simmons</h2>
            <button className="flex items-center gap-2 py-3 px-5 bg-red1 rounded-3xl text-white">View Profile <IoIosArrowRoundForward/></button>
        </div>
        <div className="md:absolute top-46.5 -right-3 w-82.5 mt-7 md:mt-10">
            <h4 className="font-rubik text-4 mb-5">About Me </h4>
            <p className={`font-rubik text-[16px] leading-[30px] ${togglevalue?'text-gray1':'text-gray2'}`}>A personal <span className="text-red1">portfolio</span> is a collection of to <br />your work, that is achievements, and a <br />skills that <span className="text-red1">web design</span > highlights in your</p>

            <p className="mt-10 font-rubik text-4 mb-2.5">Find me on </p>
             <div className='flex items-center gap-2 '>
                <FaInstagram className={` rounded-full w-10 h-10 p-3.25 ${togglevalue ? ' bg-stone-800 ' : ' bg-gray-200 '}`}/>
                <TfiFacebook className={` rounded-full w-10 h-10 p-3.25 ${togglevalue ? ' bg-stone-800 ' : ' bg-gray-200 '}`}/>
                <FaLinkedinIn className={` rounded-full w-10 h-10 p-3.25 ${togglevalue ? ' bg-stone-800 ' : ' bg-gray-200 '}`}/>
                <FaTwitter  className={` rounded-full w-10 h-10 p-3.25 ${togglevalue ? ' bg-stone-800 ' : ' bg-gray-200 '}`}/>
               
             </div>
        </div>
        </div>
    </div>
    );
};

export default Hero;