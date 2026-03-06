import Education from "./Container/Education/Education"
import FiveCard from "./Container/FiveCard/FiveCard"
import FourCard from "./Container/FourCard/FourCard"
import Hero from "./Container/Hero/Hero"
import LatestService from "./Container/LatestService/LatestService"
import Navbar from "./Container/Navbar/Navbar"
import Skill from "./Container/SkillSection/Skill"

function App() {
 

  return (
   <div className="bg-black1 text-white">
    <Navbar/>
    <Hero/>
    <FourCard/>
    <FiveCard/>
    <LatestService/>
    <Skill/>
    <Education/>
   </div>
  )
}

export default App
