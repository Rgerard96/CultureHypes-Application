import {
  ChevronDownIcon,
  LocationMarkerIcon,
  SearchIcon,
} from '@heroicons/react/outline';
import React from 'react';

export default function Search() {
  return (
      <div className='container mx-auto mb-8 overflow-hidden'>
        <div className='flex flex-col items-center justify-between rounded-lg border border-gray-300 bg-white p-5 md:h-16 md:flex-row md:p-0'>
          <div className='mb-3 flex h-full w-full items-center rounded-lg border px-3 py-2 md:mb-0 md:rounded-none md:border-y-0 md:border-l-0 md:py-0'>
            <SearchIcon className='mr-3 w-5 text-gray-400' />
            <input
              type='text'
              name='search'
              id='search'
              placeholder='Zoek jouw favoriete eten'
              className='w-full focus:outline-none'
            />
          </div>
          <div className='mb-3 flex h-full w-full items-center justify-between rounded-lg border px-3 py-2 md:mb-0 md:rounded-none md:border-y-0 md:border-l-0 md:py-0'>
            <div className='flex items-center'>
              <LocationMarkerIcon className='mr-3 w-5 text-gray-400' />
              <input
                type='text'
                name='search'
                id='search'
                placeholder='Stad'
                className='w-full focus:outline-none'
              />
            </div>
            <ChevronDownIcon className='ml-3 w-5 text-gray-400' />
          </div>
          <div className='w-full px-0 text-center sm:px-3 md:w-max'>
            <div className='cursor-pointer rounded-lg bg-blue-500 py-2 px-8 text-white lg:hover:bg-blue-600'>
              Zoek
            </div>
          </div>
        </div>
      </div>
  );
}
