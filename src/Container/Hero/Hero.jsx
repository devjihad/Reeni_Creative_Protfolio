import { IoIosArrowRoundForward } from "react-icons/io";
import Mainimage from '../../assets/mainImage.png'
import bg from '../../assets/bg.png'
const Hero = () => {
    return (
    <div className="container ">
         <div >
            <div className="w-239 mx-auto flex justify-center relative z-20 bg-cover" >
                <img src={Mainimage} alt="" className="w-200 h-200 shadow-x-2xl "/>
            </div>
            <h2 className="text-[90px] font-bold tracking-widest text-outline font-rajdhani absolute -bottom-55 left-[22%] z-30 ">WEB DESIGN</h2><br />
            <h2 className="text-[130px] font-bold tracking-widest text-outline2 font-rajdhani  absolute top-full left-[12%] z-10">WEB DESIGN</h2>
        </div>
        <div>
            <div>
            <h2 className="text-[40px] font-bold"> <span className="text-[28px] font-semibold font-rajdhani">HELLO I'M </span>HOSSEN AHAMMAD</h2>
            <button className="flex items-center gap-2 py-2 px-4 bg-red1 rounded-3xl">View Profile <IoIosArrowRoundForward/></button>
        </div>
        <div>
            <h4 className="font-rubik">About Me </h4>
            <p className="text-gray1 font-rubik text-4 ">A personal <span className="text-red1">portfolio</span> is a collection of toyour work, that is achievements, and askills that <span className="text-red1">web design</span > highlights in your</p>
        </div>
        </div>
    </div>
    );
};

export default Hero;