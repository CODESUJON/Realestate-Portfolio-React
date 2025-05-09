
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroimg from '../assets/images/hero1.webp'
import { useEffect } from 'react';
import Description from '../components/shared/Description';
import Button from '../components/shared/Button';

function HeroSection() {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })

  }, [])
  return (
    <>
      <div className='bg-white'>
        <section id='hero' className='w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20' style={{ backgroundImage: `url(${heroimg})` }}>
          <h1 className='text-6xl text-white font-semibold  lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]'>Find your next home in INDIA</h1>
          <Description data-aos="zoom-in" className='lg:pr-[500px] text-white' text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto natus fugit non sequi totam accusantium amet debitis, dicta quam vero" />
        </section>

      </div>

      {/* form */}
      <div className='bg-transparent z-10'>
        <div className='bg-white lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1  justify-center items-center gap-6 p-8 rounded-xl -mt-14'>
          {/* input section */}

          <div className='w-full'>
            <h1 className='text-black font-semibold '>LOCATION</h1>
            <input type="text" placeholder='Enter an address, state, city or pincode' className='bg-white w-full p-2 mt-2 border-b-[1px] border-[#c9c7c1]' />
          </div>

          <div className='w-full'>
            <h1 className='text-black font-semibold '>TYPE</h1>
            <select name="selectOption" id="selectOption" className='bg-white w-full p-2 mt-2 border-b-[1px] border-[#c9c7c1] text-gray-500 text-md'>
              <option value="" disabled selected>Select Property</option>
              <option value="Option1" >Rentals</option>
              <option value="Option2" >Sales</option>
              <option value="Option3" >Commmercials</option>
            </select>
          </div>

          <div className='w-full'>
            <h1 className='text-black font-semibold '>CATEGORY</h1>
            <select name="selectOption" id="selectOption" className='bg-white w-full p-2 mt-2 border-b-[1px] border-[#c9c7c1] text-gray-500 text-md'>
              <option value="" disabled selected>Property Category</option>
              <option value="Option1" >Apartments</option>
              <option value="Option2" >Duples</option>
              <option value="Option3" >Condos</option>
            </select>
          </div>

          <div className='w-full'>
            <Button text='SUBMIT'  className='w-full'/>
          </div>

        </div>

      </div>
    </>
  )
}

export default HeroSection