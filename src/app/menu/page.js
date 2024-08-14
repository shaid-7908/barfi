import React from 'react';
import Link from 'next/link';
import { BsBoxArrowLeft } from 'react-icons/bs';

function Menu() {
  const starters = [
    { name: 'FISH CUTTON BLUE', price: '299' },
    { name: 'FISH FINGER', price: '239' },
    { name: 'DRY CHILLI FISH', price: '289' },
    { name: 'KANCHI FISH', price: '289' },
    { name: 'LAT MAI KAI FISH', price: '289' },
    { name: 'DRY CHILLI PRAWN', price: '339' },
    { name: 'GOLDEN FRIED PRAWN', price: '339' },
    { name: 'LAT MAIN KAI PRAWN', price: '339' },
    { name: 'STUFFED TANDOORI ALOO', price: '189' },
    { name: 'TANDOORI MASHROOM', price: '239' },
    { name: 'PANEER TIKKA', price: '239' },
    { name: 'HARIYALI PANEER TIKKA', price: '259' },
    { name: 'GONDHORAJ PANEER TIKKA', price: '269' },
    { name: 'BADSAHI PANEER TIKKA', price: '279' },
    { name: 'FISH TIKKA', price: '249' },
    { name: 'FISH FIROZI', price: '289' },
    { name: 'GONDHORAJ FISH ', price: '269' },

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
      <div className="bg-white lg:px-28 py-12 rounded-lg shadow-lg w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className='lg:px-8 px-3'>
            <h2 className="text-2xl font-bold mb-6">STARTERS</h2>
            {starters.map((item, index) => (
              <div key={index} className="flex justify-between py-2">
                <span className="font-medium text-lg">{item.name}</span>
                <span className="font-medium text-lg">{item.price}</span>
              </div>
            ))}
          </div>
          <div className='lg:px-8 px-3'>
            <h2 className="text-2xl font-bold mb-6">THALI</h2>
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
