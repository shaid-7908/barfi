import React from 'react';
import Link from 'next/link';
import { BsBoxArrowLeft } from 'react-icons/bs';

function Menu() {
  const starters = [
    { name: 'PINE NUT SBRISALONA', price: '$29.79' },
    { name: 'AENEAN EU', price: '$19.35' },
    { name: 'SED FEUGIATE', price: '$25.80' },
    { name: 'CONSECTETUR', price: '$21.89' },
    { name: 'CHIKEN RESMI CABAB', price: '$33.59' },
    { name: 'CHEESE ROLL', price: '$47.24' },
  ];

  const mains = [
    { name: 'SUSPENDISSE', price: '$29.79' },
    { name: 'CONVALLIS AUGUE', price: '$19.35' },
    { name: 'MAECENAS TRISTIQUE', price: '$12.19' },
    { name: 'CHICKEN KABAB', price: '$31.89' },
    { name: 'MUTTON KURMA', price: '$61.01' },
    { name: 'INDIAN THALI', price: '$91.89' },
  ];

  return (
    <div className='min-h-screen z-50 w-full'>
      <div className='menu-bg flex flex-col gap-3 justify-center items-center w-full h-[75vh]'>
        <h1 className='text-white font-bold text-4xl'>Our Menu</h1>
        <Link href={`/`}>
          <h3 className='font-semibold text-[#CFA670]'>< BsBoxArrowLeft className='text-xl inline-block mr-2' /> Go Back to Home Page</h3>
        </Link>
      </div>
      <div className="bg-white px-28 py-12 rounded-lg shadow-lg w-full mx-auto">
        <div className="grid grid-cols-2 gap-20">
          <div className='px-8'>
            <h2 className="text-2xl font-bold mb-6">STARTERS</h2>
            {starters.map((item, index) => (
              <div key={index} className="flex justify-between py-2">
                <span className="font-medium text-lg">{item.name}</span>
                <span className="font-medium text-lg">{item.price}</span>
              </div>
            ))}
          </div>
          <div className='px-8'>
            <h2 className="text-2xl font-bold mb-6">MAIN</h2>
            {mains.map((item, index) => (
              <div key={index} className="flex justify-between py-2">
                <span className="font-medium text-lg">{item.name}</span>
                <span className="font-medium text-lg">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
