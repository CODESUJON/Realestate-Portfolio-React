import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { client } from "../utils/export"
import SectionHeading from '../components/shared/SectionHeading';
import Heading from '../components/shared/Heading';

import ClientCard from '../components/shared/ClientCard';

function Testimonials() {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
  }, [])
  return (
    <div className='bg-transparent'>
      <section id='testimonials' className='lg:w-[95%] bg-cover bg-center w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-20'>
        <div className='flex flex-col justify-center items-start gap-4'>
          <SectionHeading text='OUR CLIENTS' />
          <Heading text='What are our clients saying about us' className='text-[40px] leading-10 ' />
        </div>

        <div id='clients-box' className='grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8'>
          {client.map((item, index) => (
            <ClientCard key={index} image={item.image} name={item.name} text={item.text} feedback={item.feedback}/>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Testimonials