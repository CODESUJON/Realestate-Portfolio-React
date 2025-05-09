
import AOS from 'aos';
import 'aos/dist/aos.css';
import area1 from "../assets/images/area1.jpg"
import area2 from "../assets/images/area2.jpg"
import area3 from "../assets/images/area3.jpg"
import SectionHeading from "../components/shared/SectionHeading"
import Heading from "../components/shared/Heading"
import { useEffect } from 'react';





function PopularArea() {

    const imgs = [area1, area2, area3];

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-sine',
            delay: 100,
        });
        AOS.refresh();

    }, [])

    return (
        <div className='bg-transparent'>
            <section className='bg-rose-100 lg:w-[95%] w-full m-auto bg-cover bg-center rounded-xl flex justify-center items-center flex-col lg:px-20 px-6 py-20 gap-20'>
                <div className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8'>
                    <div>
                        <SectionHeading data-aos="zoom-in" text='POPULAR AREAS' />
                        <Heading data-aos="zoom-in" className='text-[40px] leading-10' text='Explore most popular areas' />
                    </div>

                    <div className='grid lg:grid-cols-3 grid-cols-1 col-span-2 justify-center items-center gap-6'>
                        {imgs.map((img, index) => (
                            <div key={index} style={{ backgroundImage: `url(${img})` }} className='h-[400px] bg-cover bg-center rounded-xl' />
                        ))}
                    </div>
                </div>
                <div id='bottom' className='w-full grid lg:grid-cols-3 grid-cols-1 lg:justify-center justify-start items-center gap-6'>
                    <div className="flex justify-center lg:items-center gap-8 w-full">
                        <h1 className='text-black text-7xl font-semibold'>5k</h1>
                        <h1>ACTIVE<br></br>LISTING</h1>
                    </div>

                    <div className="flex justify-center lg:items-center gap-8 w-full">
                        <h1 className='text-black text-7xl font-semibold'>9K</h1>
                        <h1>SOLID<br></br>LISTING</h1>
                    </div>

                    <div className="flex justify-center lg:items-center gap-8 w-full">
                        <h1 className='text-black text-7xl font-semibold'>6K</h1>
                        <h1>CLIENTS<br></br>WE'VE SERVED</h1>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default PopularArea