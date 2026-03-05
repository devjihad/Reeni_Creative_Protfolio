import img1 from "../../assets/1.png"
import img2 from "../../assets/2.png"
import img3 from "../../assets/3.png"
import img4 from "../../assets/4.png"

const FourCard = () => {
  return (
    <div className="container">
        <div  className="w-74 h-56 border border-red-300 py-10.25 rounded-xl">
            <img src={img1} alt="" className="mx-auto w-15.5 h-12.5 mb-7 "/>
            <h4 className=" text-center text-[24px] font-bold font-rajdhani mb-2">Web Design </h4>
            <p className="text-center font-rubik text-[16px] font-normal text-gray1">120 Project</p>
        </div>
    </div>
  )
}

export default FourCard