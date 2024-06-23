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
    <nav className="absolute md:top-[55px] top-0 w-screen bg-slate-500">
      <div className="container md:flex hidden justify-between items-center mx-auto py-5 bg-lime-600">
        <div>LOGO</div>
        <div>
          <ul className='flex gap-10 items-center'>
            <Link href={`/`}>
              <li className='hover:scale-125 hover:duration-700 hover:text-[#CFA670]'>Home</li>
            </Link>
            <Link href={`/about`}>
              <li className='hover:scale-125 hover:duration-700 hover:text-[#CFA670]'>About</li>
            </Link>
            <Link href={`/menu`}>
              <li className='hover:scale-125 hover:duration-700 hover:text-[#CFA670]'>Menu</li>
            </Link>
            <Link href={`/contactus`}>
              <li className='hover:scale-125 hover:duration-700 hover:text-[#CFA670]'>Contact</li>
            </Link>
            <Link href={`/reservation`}>
              <button className='px-4 py-3 border'>Reservation</button>
            </Link>
          </ul>
        </div>
      </div>
      <div className='w-full flex md:hidden py-7 bg-black justify-between items-center px-5'>
        <h1 className='text-white'>LOGO</h1>
        <FaBars className='text-white text-3xl cursor-pointer' onClick={toggleSidebar} />
      </div>
      <div ref={sidebarRef} className={`fixed top-0 left-0 h-full w-64 bg-slate-800 z-50 transform ${sidebar ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className='flex justify-between items-center p-5'>
          <h1 className='text-white'>LOGO</h1>
          <FaTimes className='text-white text-3xl cursor-pointer' onClick={toggleSidebar} />
        </div>
        <ul className='flex flex-col gap-5 mt-10 px-5'>
          <Link href={`/`} onClick={toggleSidebar}>
            <li className='text-white hover:text-[#CFA670] cursor-pointer'>Home</li>
          </Link>
          <Link href={`/about`} onClick={toggleSidebar}>
            <li className='text-white hover:text-[#CFA670] cursor-pointer'>About</li>
          </Link>
          <Link href={`/menu`} onClick={toggleSidebar}>
            <li className='text-white hover:text-[#CFA670] cursor-pointer'>Menu</li>
          </Link>
          <Link href={`/contactus`} onClick={toggleSidebar}>
            <li className='text-white hover:text-[#CFA670] cursor-pointer'>Contact</li>
          </Link>
          <Link href={`/reservation`} onClick={toggleSidebar}>
            <button className='px-4 py-3 border bg-white text-black'>Reservation</button>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
