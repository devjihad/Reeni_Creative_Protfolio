import FiveCard from "./Container/FiveCard/FiveCard"
import FourCard from "./Container/FourCard/FourCard"
import Hero from "./Container/Hero/Hero"
import Navbar from "./Container/Navbar/Navbar"

function App() {
 

  return (
   <div className="bg-black1 text-white">
    <Navbar/>
    <Hero/>
    <FourCard/>
    <FiveCard/>
   </div>
  )
}

export default App
