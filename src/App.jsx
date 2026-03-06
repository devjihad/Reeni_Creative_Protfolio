import Education from "./Container/Education/Education"
import FiveCard from "./Container/FiveCard/FiveCard"
import Footer from "./Container/Footer/Footer"
import FourCard from "./Container/FourCard/FourCard"
import Hero from "./Container/Hero/Hero"
import LatestProtfolio from "./Container/LatestProtfolio/LatestProtfolio"
import LatestService from "./Container/LatestService/LatestService"
import Navbar from "./Container/Navbar/Navbar"
import PricePlan from "./Container/PricePlan/PricePlan"
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
    <LatestProtfolio/>
    <PricePlan/>
    <Footer/>
   </div>
  )
}

export default App
