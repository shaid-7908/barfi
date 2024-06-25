import React from 'react'
import Link from 'next/link';
import { BsBoxArrowLeft } from "react-icons/bs";
import { CiMobile3 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FaRegAddressCard } from "react-icons/fa6";

function Contactus() {
  return (
    <div className='min-h-screen z-50 w-full'>
      <div className='contact-bg flex flex-col gap-3 justify-center items-center w-full h-[75vh]'>
        <h1 className='text-white font-bold text-4xl'>Contact</h1>
        <Link href={`/`}>
          <h3 className='font-semibold text-[#CFA670]'>< BsBoxArrowLeft className='text-xl inline-block mr-2' /> Go Back to Home Page</h3>
        </Link>
      </div>
      {/* map */}
      <div className='flex justify-center items-center mt-8 mb-8'>
        <iframe
          className='lg:w-[85vw] lg:h-[60vh]'
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12370371.792462902!2d2.124175805707276!3d40.80356989527924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fe82448dd203%3A0xe22cf55c24635e6f!2sItaly!5e0!3m2!1sen!2sin!4v1705746424441!5m2!1sen!2sin"
          width="350px"
          height="400px"
          style={{ border: 2 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* cards */}
      <div className='w-full flex justify-center flex-col lg:flex-row items-center lg:gap-20 gap-8 px-4 py-10 '>
        <div className='flex shadow-md border hover:scale-110 transition-all duration-700 ease-in-out rounded-md justify-center items-center flex-col gap-3 lg:gap-2 py-5 lg:w-[25vw] w-full'>
          <FaRegAddressCard className='text-7xl' />
          <h1 className='lg:text-3xl text-2xl font-semibold text-black'>Address</h1>
          <p className='font-semibold'>Sarat Sarani Road, Near Bandel Church</p>
        </div>
        <div className='flex shadow-md border hover:scale-110 transition-all duration-700 ease-in-out  rounded-md justify-center items-center flex-col gap-3 lg:gap-2 py-5 lg:w-[25vw] w-full'>
          <CiMobile3 className='text-7xl' />
          <h1 className='lg:text-3xl text-2xl font-semibold text-black'>Phone</h1>
          <p className='font-semibold'>+91 7980702738</p>
        </div>
        <div className='flex shadow-md border hover:scale-110 transition-all duration-700 ease-in-out  rounded-md justify-center items-center flex-col gap-3 lg:gap-2 py-5 lg:w-[25vw] w-full'>
          <TfiEmail className='text-7xl' />
          <h1 className='lg:text-3xl text-2xl font-semibold text-black'>Email</h1>
          <p className='font-semibold'>contact@domain.com</p>
        </div>
      </div>
      {/* contact form  */}
      <div className='w-full flex justify-center flex-col lg:flex-row items-center lg:gap-32 gap-8 px-4 py-10' >
        <div className='lg:w-1/3 w-full h-96 rounded-md relative overflow-hidden'>
          <img src='https://www.barfithefoodmagician.co.in/sitepad-data/uploads/2024/05/contactus01.jpg' className='w-full h-full object-cover transition-transform duration-500 hover:scale-110' />
        </div>
        <div className='lg:w-[45vw] pt-8 lg:pt-0 w-full'>
          <h1 className='font-semibold lg:text-3xl text-2xl mb-6'>Get In Touch With Us</h1>
          <form className='flex flex-col gap-4'>
            <input type='text' placeholder='Name' className='input-field py-3 px-4 border border-gray-300 rounded-md mb-4 focus:outline-none lg:w-2/3 w-full' />
            <input type='email' placeholder='Email' className='input-field py-3 px-4 border border-gray-300 rounded-md mb-4 focus:outline-none lg:w-2/3 w-full ' />
            <input type='tel' placeholder='Phone' className='input-field py-3 px-4 border border-gray-300 rounded-md mb-4 focus:outline-none lg:w-2/3 w-full ' />
            <textarea placeholder='Message' className='input-field py-3 px-4 border border-gray-300 rounded-md mb-4 focus:outline-none lg:w-2/3 w-full ' rows='4'></textarea>
            <button type='submit' className=' bg-[#CFA670] py-2 px-4 rounded-md font-semibold transition-colors lg:w-2/3 w-full'>
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contactus;