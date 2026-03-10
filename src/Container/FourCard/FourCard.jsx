import { useCallback, useContext } from "react"
import img1 from "../../assets/1.png"
import img2 from "../../assets/2.png"
import img3 from "../../assets/3.png"
import img4 from "../../assets/4.png"
import { contextData } from "../../Context/Context"

const FourCard = () => {
    const {togglevalue}= useContext(contextData)
  return (
    <div className=" container flex flex-col md:flex-row justify-between items-center gap-7 mt-7.5 mb-22.5">
        <div  className="w-74 h-56 border border-rgb hover:border-red1  py-10.25 rounded-xl">
            <img src={img1} alt="" className="mx-auto w-15.5 h-12.5 mb-7 "/>
            <h4 className=" text-center text-[24px] font-bold font-rajdhani mb-2">Web Design </h4>
            <p className={`text-center font-rubik text-[16px] font-normal ${togglevalue?'text-gray1':'text-gray2'}`}>120 Project</p>
        </div>

        <div  className="w-74 h-56 border border-rgb hover:border-red1 py-10.25 rounded-xl">
            <img src={img3} alt="" className="mx-auto w-15.5 h-12.5 mb-7 "/>
            <h4 className=" text-center text-[24px] font-bold font-rajdhani mb-2">UI/UX Design </h4>
            <p className={`text-center font-rubik text-[16px] font-normal ${togglevalue?'text-gray1':'text-gray2'}`}>120 Project</p>
        </div>

        <div  className="w-74 h-56 border border-rgb hover:border-red1 py-10.25 rounded-xl">
            <img src={img4} alt="" className="mx-auto w-15.5 h-12.5 mb-7 "/>
            <h4 className=" text-center text-[24px] font-bold font-rajdhani mb-2">Web Research </h4>
            <p className={`text-center font-rubik text-[16px] font-normal ${togglevalue?'text-gray1':'text-gray2'}`}>120 Project</p>
        </div>

        <div  className="w-74 h-56 border border-rgb hover:border-red1 py-10.25 rounded-xl">
            <img src={img2} alt="" className="mx-auto w-15.5 h-12.5 mb-7 "/>
            <h4 className=" text-center text-[24px] font-bold font-rajdhani mb-2">Marketing</h4>
            <p className={`text-center font-rubik text-[16px] font-normal ${togglevalue?'text-gray1':'text-gray2'}`}>120 Project</p>
        </div>
    </div>
  )
}

export default FourCard