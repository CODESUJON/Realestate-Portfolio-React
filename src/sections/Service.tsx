import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { service } from "../utils/export"
import SectionHeading from '../components/shared/SectionHeading';
import Heading from '../components/shared/Heading';
import ServiceCard from '../components/shared/ServiceCard';



function Service() {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
  }, [])
  return (
    <div className='bg-transparent pb-20'>
      <section id='services' className='bg-red-100 lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-10'>
        <div className='flex flex-col justify-center items-start gap-4'>
          <SectionHeading  text='OUR SERVICES'/>
          <Heading className='text-[40px] leading-10 ' text='Top real estate services available'/>
        </div>

        <div id='service-box' className='grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8'>
          {service.map((item,index)=>(
            <ServiceCard key={index} icon={item.icon} title={item.title} desc={item.desc} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Service