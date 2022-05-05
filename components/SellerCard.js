import { StarIcon } from '@heroicons/react/solid';
import React from 'react';
import { useRouter } from 'next/router';
import Dropdown from './Dropdown';

export default function SellerCard() {
  const router = useRouter();

  return (
    <div className='w-full rounded-lg border border-gray-300 bg-white p-5'>
      <div className='mb-5 flex justify-between'>
        <div className='flex items-center'>
          <div
            className='mr-2 h-12 w-12 rounded-full'
            style={{
              backgroundImage: 'url(' + './images/person.jpg' + ')',
              backgroundSize: 'cover',
            }}
          ></div>
          <div>
            <p className='-mb-1 text-sm font-bold'>rgerard96</p>
            <small className='text-xs text-gray-400'>Rotterdam, 3073</small>
          </div>
        </div>
        <div className='flex flex-col justify-between'>
          <div className='flex text-sm'>
            <div>
              <StarIcon className='mr-1.5 w-5 text-yellow-500' />
            </div>
            <div>5.0</div>
          </div>
          <div className='flex cursor-pointer justify-end text-gray-500'>
            <Dropdown name='option' />
          </div>
        </div>
      </div>
      <div
        className='mb-5 h-36 w-full rounded-lg'
        style={{
          backgroundImage: 'url(' + './images/food.jpg' + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className='mb-3.5 flex flex-wrap'>
        <div className='mr-1.5 mb-1.5 w-max rounded border bg-gray-100 p-1 text-center text-xs'>
          Surinaams
        </div>
        <div className='mr-1.5 mb-1.5 w-max rounded border bg-gray-100 p-1 text-center text-xs'>
          Antilliaans
        </div>
        <div className='mr-1.5 mb-1.5 w-max rounded border bg-gray-100 p-1 text-center text-xs'>
          Chinees
        </div>
        <div className='mr-1.5 mb-1.5 w-max rounded border bg-gray-100 p-1 text-center text-xs'>
          Koreans
        </div>
        <div className='mr-1.5 mb-1.5 w-max rounded border bg-gray-100 p-1 text-center text-xs'>
          Sweets
        </div>
        <div className='mr-1.5 mb-1.5 w-max rounded border bg-gray-100 p-1 text-center text-xs'>
          Marokaans
        </div>
        <div className='mr-1.5 mb-1.5 w-max rounded border bg-gray-100 p-1 text-center text-xs'>
          Turks
        </div>
        <div className='mr-1.5 mb-1.5 w-max rounded border bg-gray-100 p-1 text-center text-xs'>
          Taart
        </div>
      </div>
      <div>
        {/* <div
          className='cursor-pointer rounded-lg bg-blue-500 py-2 px-4 text-center text-white hover:bg-blue-600'
          onClick={() => router.push('/menu/1')}
        >
          Menu bekijken
        </div> */}
        <div
          className='cursor-pointer rounded-lg border border-blue-500 py-2 px-4 text-center text-blue-500 transition-colors lg:hover:bg-blue-500 lg:hover:text-white'
          onClick={() => router.push('/menu/1')}
        >
          Menu bekijken
        </div>
      </div>
    </div>
  );
}
