import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaBuilding, FaMobile, FaFax } from "react-icons/fa"


import { IoMdMail } from "react-icons/io"
import prop7 from "../../assets/images/prop7.jpg"
import prop8 from "../../assets/images/prop8.jpg"




function Footer() {
  return (
    <>
      <footer className="bg-gray-800 w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-white text-2xl font-semibold">About Us</h1>
          <p className="text-slate-200 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, placeat? Odit aliquam, maiores ducimus perspiciatis cupiditate dolorum sit repellendus nulla?</p>
          <div className="flex justify-start items-center gap-4 mt-4">
            <div className="p-3  rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaFacebookF className="size-5" />
            </div>
            <div className="p-3  rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaInstagram className="size-5" />
            </div>
            <div className="p-3  rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaTwitter className="size-5" />
            </div>
            <div className="p-3  rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaYoutube className="size-5" />
            </div>
          </div>
          <h1 className="text-white  mt-8">Copyright Real Estate, All Rights Reserved</h1>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-white text-2xl font-semibold">Contact Us</h1>
          <div className="flex justify-start items-center gap-3 ">
            <FaBuilding className="text-white size-5" />
            <p className="text-slate-200">10845 kolkata Peak Dr, West Bengal, 742202</p>
          </div>

          <div className="flex justify-start items-center gap-3 ">
            <FaMobile className="text-white size-5" />
            <p className="text-slate-200">+91 879 0658 801</p>
          </div>

          <div className="flex justify-start items-center gap-3 ">
            <FaFax className="text-white size-5" />
            <p className="text-slate-200">+91 003 678 0232</p>
          </div>

          <div className="flex justify-start items-center gap-3 ">
            <IoMdMail className="text-white size-5" />
            <p className="text-slate-200">office12@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-white text-2xl font-semibold">Latest Properties</h1>
          <div className="flex justify-start items-center gap-4">
            <img src={prop7} className="w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300" />
            <div>
              <h1 className="text-lg text-white">Villa with amazing view</h1>
              <p className="text-slate-400">$ 278.98</p>
            </div>
          </div>

          <div className="flex justify-start items-center gap-4">
            <img src={prop8} className="w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300" />
            <div>
              <h1 className="text-lg text-white">Sea View Villa</h1>
              <p className="text-slate-400">$ 789.23</p>
            </div>
          </div>
        </div>
      </footer>

      {/* slide to up */}
      {/* <div className="bg-red-600 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6">
        <Link to="hero" spy={true} offset={-100} smooth={true}>
        <FaArrowUp/>
        </Link>
      </div> */}
    </>
  )
}

export default Footer