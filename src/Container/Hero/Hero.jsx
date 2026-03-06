import { IoIosArrowRoundForward } from "react-icons/io";
import Mainimage from '../../assets/banner-img-3.png'
import bg from '../../assets/bg.png'
import { FaInstagram } from "react-icons/fa6";
import { TfiFacebook } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Hero = () => {
    return (
    <div className=" md:container  relative mb-22.5 px-5 md:px-0">
         <div >
            <div className="md:w-170 mx-auto md:flex md:justify-center relative z-20 " style={{backgroundImage:`url(${bg})`}} >
                <img src={Mainimage} alt="" className="px-5 md:px-0 md:w-155 md:h-200  "/>
            </div>
            <h2 className="text-[90px] w-175 font-bold tracking-widest text-outline font-rajdhani absolute  top-169 left-1/2 -translate-x-1/2 -tranlate-y-1/2 z-30 hidden md:inline ">WEB DESIGN</h2><br />
            <h2 className="text-[130px] font-bold tracking-widest text-outline2 font-rajdhani  absolute top-169 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:inline">WEBDESIGN</h2>
        </div>
        <div>
            <div className="md:absolute md:top-47.75 w-108 " >
            <h2 className="text-[38px] md:text-[70px] font-bold leading-12 md:leading-20 font-rajdhani mb-3 md:mb-5 z-40"> <span className="text-[20px] md:text-[28px] font-bold ">HELLO I'M <br /> </span>HOSSEN <br />AHAMMAD</h2>
            <button className="flex items-center gap-2 py-2 px-4 bg-red1 rounded-3xl">View Profile <IoIosArrowRoundForward/></button>
        </div>
        <div className="md:absolute top-47.75 right-0 w-82.5 mt-7 md:mt-0">
            <h4 className="font-rubik mb-5">About Me </h4>
            <p className="text-gray1 font-rubik text-[16px]  ">A personal <span className="text-red1">portfolio</span> is a collection of to <br />your work, that is achievements, and a <br />skills that <span className="text-red1">web design</span > highlights in your</p>

            <p className="mt-10 font-rajdhani mb-2">Find me on </p>
             <div className='flex items-center gap-2 '>
                <FaInstagram className='p-1.5 bg-stone-800 rounded-full w-6 h-6'/>
                <TfiFacebook className='p-1.5 bg-stone-800 rounded-full w-6 h-6'/>
                <FaLinkedinIn className='p-1.5 bg-stone-800 rounded-full w-6 h-6'/>
                <FaTwitter  className='p-1.5 bg-stone-800 rounded-full w-6 h-6'/>
               
             </div>
        </div>
        </div>
    </div>
    );
};

export default Hero;