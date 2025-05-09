
import AOS from 'aos';
import 'aos/dist/aos.css';

import { property } from "../utils/export"


import { useEffect } from "react";
import SectionHeading from "../components/shared/SectionHeading";
import Heading from "../components/shared/Heading";
import PropertiesCard from "../components/shared/PropertiesCard";

function Properties() {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })

  }, [])
  return (
    <div className="bg-transparent">
      <section id="properties" className="lg:w-[90%] m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center items-start gap-10">
        <div className="flex flex-col justify-center items-start gap-4">
          <SectionHeading data-aos="zoom-in" text="PROPERTIES" />
          <Heading data-aos="zoom-in" className="text-4xl" text="Explore the latest properties available" />
        </div>

        {/* properties */}
        <div className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
          {
          property.map((item,index) => (

            <PropertiesCard key={index} images={item.images}  address={item.address} name={item.name} price={item.price} about={item.about} bath={item.bath} bed={item.bed} area={item.area} owner={item.owner}/>
          ))
          }
        </div>
      </section>
    </div>
  )
}

export default Properties