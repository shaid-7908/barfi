'use client'
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    if (sidebar) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebar]);

  return (
    <nav className="absolute md:top-[55px] top-0 w-full ">
      <div className="container md:flex hidden justify-between items-center mx-auto py-5 ">
        <div className="w-[80px] h-[80px] rounded-full overflow-hidden flex-shrink-0">
          <img
            alt="na"
            src="https://barfithefoodmagician.co.in/sitepad-data/uploads/2024/05/WhatsApp-Image-2024-05-07-at-15.32.47.jpeg"
          />
        </div>
        <div>
          <ul className="flex gap-10 text-white z-50 font-semibold items-center">
            <Link href={`/`}>
              <li className="hover:scale-125 transition-all duration-700 ease-in-out  hover:text-[#CFA670]">
                Home
              </li>
            </Link>
            <Link href={`/about`}>
              <li className="hover:scale-125 transition-all duration-700 ease-in-out  hover:text-[#CFA670]">
                About
              </li>
            </Link>
            <Link href={`/menu`}>
              <li className="hover:scale-125 transition-all duration-700 ease-in-out  hover:text-[#CFA670]">
                Menu
              </li>
            </Link>
            <Link href={`/contactus`}>
              <li className="hover:scale-125 transition-all duration-700 ease-in-out  hover:text-[#CFA670]">
                Contact
              </li>
            </Link>
            <Link href={`/reservation`}>
              <button className="px-4 py-3 border">Reservation</button>
            </Link>
          </ul>
        </div>
      </div>
      {/* Small screen nav  */}
      <div className="w-full flex md:hidden py-5 justify-between items-center px-4">
        <div className="w-[80px] h-[80px] rounded-full overflow-hidden flex-shrink-0">
          <img
            alt="na"
            src="https://barfithefoodmagician.co.in/sitepad-data/uploads/2024/05/WhatsApp-Image-2024-05-07-at-15.32.47.jpeg"
          />
        </div>
        <FaBars
          className="text-white text-2xl cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-64 bg-[#CFA670] z-50 transform ${
          sidebar ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-5">
          <div className="w-[80px] h-[80px] rounded-full overflow-hidden flex-shrink-0">
            <img
              alt="na"
              src="https://barfithefoodmagician.co.in/sitepad-data/uploads/2024/05/WhatsApp-Image-2024-05-07-at-15.32.47.jpeg"
              
            />
          </div>
          <FaTimes
            className="text-black text-2xl cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        <ul className="flex flex-col gap-6 mt-10 px-5">
          <Link href={`/`} onClick={toggleSidebar}>
            <li className="text-black hover:text-[#CFA670] font-semibold cursor-pointer">
              Home
            </li>
          </Link>
          <Link href={`/about`} onClick={toggleSidebar}>
            <li className="text-black hover:text-[#CFA670] font-semibold cursor-pointer">
              About
            </li>
          </Link>
          <Link href={`/menu`} onClick={toggleSidebar}>
            <li className="text-black hover:text-[#CFA670] font-semibold cursor-pointer">
              Menu
            </li>
          </Link>
          <Link href={`/contactus`} onClick={toggleSidebar}>
            <li className="text-black hover:text-[#CFA670] font-semibold cursor-pointer">
              Contact
            </li>
          </Link>
        </ul>
        <footer className="absolute bottom-8 left-3">
          <p className="text-sm font-semibold">
            © 2024 Barfi The Food Magician
          </p>
        </footer>
      </div>
    </nav>
  );
}

export default Navbar;
