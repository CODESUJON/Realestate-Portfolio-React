import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Description from '../components/shared/Description';
import Button from '../components/shared/Button';
import aboutimage from "../assets/images/about.jpg"
import SectionHeading from '../components/shared/SectionHeading';
import Heading from '../components/shared/Heading';

function About() {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })

  }, [])
  return (
    <section id='about' className='bg-transparent w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10 '>
      <div>
        <img data-aos="zoom-in" src={aboutimage} alt={aboutimage} className='rounded-xl lg:w-[500px] lg:h=[600px]' />
      </div>

      <div className='flex flex-col items-start gap-8'>
        <SectionHeading data-aos="zoom-in" text='WHO WE ARE'/>
        <Heading data-aos="zoom-in" data-aos-delay="200" className='text-[40px] leading-10' text='We help clients buy and sell houses since 1989' />
        <Description data-aos="zoom-in" data-aos-delay="400" className='text-gray-600 text-justify' text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quaerat laborum temporibus corporis sunt, quisquam quibusdam quis dolor atque maxime doloremque velit delectus perspiciatis laboriosam."/>
        <Button  text='VIEW MORE'/>
      </div>
    </section>
  )
}

export default About