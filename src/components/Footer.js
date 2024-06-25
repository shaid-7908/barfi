import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";


function Footer() {
  return (
    <footer className="bg-black text-white w-full py-14">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:gap-16 gap-7 md:text-left">
        <div className="space-y-4 ">
          <h3 className="text-xl mb-6 font-bold">CONTACT</h3>
          <p className='text-sm font-semibold'><FaLocationDot className='inline-block mr-2 text-[#CFA670] text-xl'/> Sarat Sarani Road, Near Bandel Church</p>
          <p className='text-sm font-semibold'><MdOutlineMarkEmailRead className='inline-block mr-2 text-[#CFA670] text-xl'/> contact@domain.com</p>
          <p className='text-sm font-semibold'><IoCall className='inline-block mr-2 text-[#CFA670] text-xl'/> +91 7980702738</p>
        </div>
        <div className="space-y-10 h-60">
         <div>
         <h3 className="text-xl mb-6 font-bold">Barfi</h3>
         <p className='mb-10 text-sm '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
         </div>
          <div className="flex lg:justify-center justify-start mt-36 space-x-6">
            <span><FaFacebookF className='text-xl'/></span>
            <span><FaTwitter className='text-xl'/></span>
            <span><FaInstagram className='text-xl'/></span>
            <span><IoLogoWhatsapp className='text-xl'/></span>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl mb-6 font-bold">WORKING HOURS</h3>
          <p className='text-sm font-semibold'>< IoIosTimer className='inline-block mr-2 text-xl'/>Monday - Fryday <FaLongArrowAltRight className='text-xl inline-block text-[#CFA670] mx-5'/> 8AM - 9PM</p>
          <p className='text-sm font-semibold'>< IoIosTimer className='inline-block mr-2 text-xl'/>Saturday  <FaLongArrowAltRight className='text-xl inline-block text-[#CFA670] mx-5'/> 8AM - 6PM</p>
          <p className='text-sm font-semibold'>< IoIosTimer className='inline-block mr-2 text-xl'/>Sunday  <FaLongArrowAltRight className='text-xl inline-block text-[#CFA670] mx-5'/> 8AM - 12AM</p>
        </div>
      </div>
      <div className="mt-16 text-center">
        <p className='text-sm font-semibold'>© 2024 Barfi The Food Magician</p>
      </div>
    </footer>
  );
}

export default Footer;
