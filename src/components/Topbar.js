import React from 'react'
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";

function Topbar() {
  return (
    <div className=" md:h-[55px] lg:flex hidden px-44 container mx-auto items-center justify-between text-white w-full bg-[#CFA670]">
      <div className='flex gap-16'>
      <p>
        <IoCall className='inline-block text-xl mr-1' /> <span className='text-sm font-medium'>+91 7980702738</span>
      </p>
      <p>
      <FaLocationDot className='inline-block text-xl mr-1'/> <span className='text-sm font-medium'>Sarat Sarani Road, Near Bandel Church</span>
      </p>
      </div>
      <div className='flex items-center gap-5'>
           <span><FaFacebookF className='text-xl'/></span>
           <span><FaTwitter className='text-xl'/></span>
           <span><FaInstagram className='text-xl'/></span>
           <span><IoLogoWhatsapp className='text-xl'/></span>
      </div>
    </div>
  )
}

export default Topbar