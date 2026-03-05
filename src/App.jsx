import FiveCard from "./Container/FiveCard/FiveCard"
import FourCard from "./Container/FourCard/FourCard"
import Hero from "./Container/Hero/Hero"
import LatestService from "./Container/LatestService/LatestService"
import Navbar from "./Container/Navbar/Navbar"

function App() {
 

  return (
   <div className="bg-black1 text-white">
    <Navbar/>
    <Hero/>
    <FourCard/>
    <FiveCard/>
    <LatestService/>
   </div>
  )
}

export default App
