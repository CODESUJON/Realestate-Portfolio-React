import About from "../sections/About"
import Contact from "../sections/Contact"
import HeroSection from "../sections/HeroSection"
import PopularArea from "../sections/PopularArea"
import Properties from "../sections/Properties"
import Service from "../sections/Service"
import Testimonials from "../sections/Testimonials"

function Home() {
  return (
    <>
    <HeroSection/>
    <About/>
    <PopularArea/>
    <Properties/>
    <Service/>
    <Testimonials/>
    <Contact/>
    </>
  )
}

export default Home