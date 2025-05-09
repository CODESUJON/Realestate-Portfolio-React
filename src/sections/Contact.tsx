import Button from "../components/shared/Button"
import Description from "../components/shared/Description"
import Heading from "../components/shared/Heading"
import SectionHeading from "../components/shared/SectionHeading"


function Contact() {
  return (
    <div className="bg-transparent pb-20">
      <section id="contact" className="bg-red-100 lg:w-[95%] h-fit w-full rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 px-6 py-20 gap-10">
        <div className="bg-white p-10 flex flex-col justify-center items-start gap-4 rounded-xl">
          <Heading className="text-2xl" text="Send us a message today"/>
          <input type="text" placeholder="Enetr your name here"  className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"/>
          <input type="email" placeholder="Enetr valid email"  className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"/>
          <input type="number" placeholder="Enetr your valid number"  className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"/>
          <textarea name="" id="" cols="30" rows="5" placeholder="Enter your message here..." className="w-full px-6 py-3 border-2"></textarea>
          <Button className="w-full" text="SEND EMAIL"/>
        </div>

        <div className="flex flex-col justify-center items-start gap-8 lg:p-20 p-6">
          <SectionHeading text="REACH US"/>
          <Heading className="text-[40px] leading-10" text="Get in touch with us today and our team will assist you"/>
          <Description text="Our experts and developers would love to contribute their expertise and insights and help you today. Contact us to help you plan your next transaction, either buying or selling a home."/>
        </div>


      </section>

    </div>
  )
}

export default Contact