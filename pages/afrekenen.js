import { ChevronDownIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CartItem from '../components/CartItem';

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '€ 90.00',
    quantity: 1,
    imageSrc: '../images/food.jpg',
    imageAlt:
      'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '€ 32.00',
    quantity: 1,
    imageSrc: '../images/food.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
];

export default function Afrekenen() {
  const router = useRouter();
  const [summary, setSummary] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 640) {
      setSummary(false);
    } else {
      setSummary(true);
    }
  }, []);
  return (
    <div className='mx-auto max-w-7xl px-5'>
      <div className='flex flex-col justify-between sm:flex-row'>
        <div className='order-2 divide-y sm:order-1 md:mr-20 md:w-3/5'>
          <div className='pb-5'>
            <h3 className='mb-5 text-lg font-bold'>Persoonlijke gegevens</h3>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
              <div className='w-full'>
                <label className='mb-1 block text-gray-600'>
                  Voor- en achternaam
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  className='w-full rounded-lg border border-gray-300 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500'
                />
              </div>
              <div className='w-full'>
                <label className='mb-1 block text-gray-600'>E-mailadres</label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='w-full rounded-lg border border-gray-300 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500'
                />
              </div>
              <div className='w-full'>
                <label className='mb-1 block text-gray-600'>
                  Telefoonnummer
                </label>
                <input
                  type='tel'
                  name='tel'
                  id='tel'
                  className='w-full rounded-lg border border-gray-300 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500'
                />
              </div>
            </div>
          </div>
          <div className='py-5'>
            <h3 className='mb-5 text-lg font-bold'>Bezorgadres</h3>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
              <div className='w-full'>
                <label className='mb-1 block text-gray-600'>Straat</label>
                <input
                  type='text'
                  name='street '
                  id='street'
                  className='w-full rounded-lg border border-gray-300 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500'
                />
              </div>
              <div className='w-full'>
                <label className='mb-1 block text-gray-600'>Huisnummer</label>
                <input
                  type='number'
                  name='house'
                  id='house'
                  className='w-full rounded-lg border border-gray-300 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500'
                />
              </div>
              <div className='w-full'>
                <label className='mb-1 block text-gray-600'>Postcode</label>
                <input
                  type='text'
                  name='postalCode'
                  id='postalCode'
                  className='w-full rounded-lg border border-gray-300 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500'
                />
              </div>
              <div className='w-full'>
                <label className='mb-1 block text-gray-600'>Woonplaats</label>
                <input
                  type='text'
                  name='city'
                  id='city'
                  className='w-full rounded-lg border border-gray-300 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='order-1 mb-5 cursor-pointer overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-600 sm:order-2 sm:mb-0 md:w-2/5'>
          <div className={`${summary ? 'block' : 'hidden'}`}>
            <div className='flow-root border-b p-5'>
              <ul role='list' className='-my-6 divide-y divide-gray-200'>
                {products.map((product) => (
                  <li key={product.id} className='flex py-6'>
                    <CartItem product={product} />
                  </li>
                ))}
              </ul>
            </div>
            <div className='divide-y p-5'>
              <div className='pb-3'>
                <div className='mb-2 flex items-center justify-between'>
                  <p>Subtotaal</p>
                  <p className='font-semibold'>€ 50.00</p>
                </div>
                <div className='mb-2 flex items-center justify-between'>
                  <p>Delivery</p>
                  <p className='font-semibold'>€ 5.00</p>
                </div>
                <div className='mb-2 flex items-center justify-between'>
                  <p>Taxes</p>
                  <p className='font-semibold'>€ 5.00</p>
                </div>
              </div>
              <div className='flex items-center justify-between pt-5'>
                <p className='font-bold'>Totaal</p>
                <p className='font-semibold'>€ 60.00</p>
              </div>
            </div>
          </div>
          <div
            className='relative bg-blue-500 py-2 px-4 text-center text-white sm:hidden'
            onClick={() => setSummary(!summary)}
          >
            Overzicht bestelling
            <ChevronDownIcon
              className={`${summary && 'rotate-180'} absolute top-3 right-4 w-5
                text-white transition-all duration-200
              ease-in`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
