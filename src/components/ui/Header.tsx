import React, { useState } from "react"
// import {Link} from "react-scroll"
import { FaXmark, FaBars } from "react-icons/fa6"
import logo from "../../assets/images/realestate_logo.jpg"
import { FaPhoneAlt, FaUserCircle } from "react-icons/fa"


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }


  const navItems = [
    { link: 'Home', path: '/' },
    { link: 'About', path: '#about' },
    { link: 'Properties', path: '#properties' },
    { link: 'Service', path: '#services' },
    { link: 'Testimonials', path: '#testimonials' },
    { link: 'Contact', path: '#contact' },
  ];

  return (
    <nav className="bg-[#f3f3f3] flex justify-between items-center gap-4 lg:px-20 px-4 py-3
     sticky top-0 z-30">
      <div>
        <img src={logo} className="lg:w-[150px] w-[120px]" />
      </div>

      <ul className="lg:flex justify-center items-center gap-8 hidden">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.path}
            className="text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 rounded-lg hover:bg-red-600 hover:text-white"

          >
            {item.link}
          </a>
        ))}
      </ul>

      {/* mobile menu */}
      <div className="flex justify-center items-center lg:hidden" onClick={toggleMenu}>
        <div>
          {isMenuOpen ? <FaXmark className="text-black text-2xl cursor-pointer" /> : <FaBars className="text-black text-2xl cursor-pointer" />}
        </div>
      </div>


      {/* for mobile */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0 `} onClick={closeMenu}>
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="text-white  uppercase font-semibold cursor-pointer px-3  rounded-lg hover:bg-red-600 hover:text-black w-full text-center"

            >
              {item.link}
            </a>
          ))}
        </ul>
      </div>

      <div className="flex justify-center items-center lg:gap-8 gap-2">
        <div className="flex justify-center items-center lg:gap-3 gap-1">
          <FaPhoneAlt className="size-5 text-red-600"/>
          <h1 className="lg:text-xl text-sm text-black font-semibold">671782633</h1>

        </div>

      </div>
    </nav>
  )
}

export default Header