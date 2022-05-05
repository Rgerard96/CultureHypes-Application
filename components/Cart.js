/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import CartItem from './CartItem';

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
  {
    id: 3,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '€ 32.00',
    quantity: 1,
    imageSrc: '../images/food.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  {
    id: 4,
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

export default function Cart({ cart, setCart }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(cart);
  }, [cart]);

  const checkoutHandler = () => {
    router.push('/afrekenen');
    setCart(false);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-20 overflow-hidden'
        onClose={setCart}
      >
        <div className='absolute inset-0 overflow-hidden'>
          <Transition.Child
            as={Fragment}
            enter='ease-in-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in-out duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-y-0 right-0 flex max-w-full pl-10'>
            <Transition.Child
              as={Fragment}
              enter='transform transition ease-in-out duration-500 sm:duration-700'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transform transition ease-in-out duration-500 sm:duration-700'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              <div className='w-screen max-w-md'>
                <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                  <div className='flex-1 overflow-y-auto py-6 px-4 sm:px-6'>
                    <div className='flex items-start justify-between'>
                      <Dialog.Title className='text-lg font-medium text-gray-900'>
                        Winkelmandje
                      </Dialog.Title>
                      <div className='ml-3 flex h-7 items-center'>
                        <button
                          type='button'
                          className='-m-2 p-2 text-gray-500 focus:outline-none'
                          onClick={() => setCart(!cart)}
                        >
                          <span className='sr-only'>Close panel</span>
                          <XIcon className='h-6 w-6' aria-hidden='true' />
                        </button>
                      </div>
                    </div>

                    <div className='mt-8'>
                      <div className='flow-root'>
                        <ul className='-my-6 divide-y divide-gray-200'>
                          {products.map((product) => (
                            <li key={product.id} className='flex py-6'>
                              <CartItem product={product} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='border-t border-gray-200 py-5 px-5 sm:px-5'>
                    <div className='flex justify-between text-base font-medium text-gray-900'>
                      <p>Subtotaal</p>
                      <p>€ 262.00</p>
                    </div>
                    <p className='mt-0.5 text-sm text-gray-500'>
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className='mt-5'>
                      <a
                        className='flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-blue-500 px-5 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600'
                        onClick={checkoutHandler}
                      >
                        Afrekenen
                      </a>
                    </div>
                    <div className='mt-5 flex justify-center text-center text-sm text-gray-500'>
                      <p>
                        of{' '}
                        <button
                          type='button'
                          className='cursor-pointer font-medium text-blue-500 hover:text-blue-600'
                          onClick={() => setCart(false)}
                        >
                          Verder winkelen
                          <span aria-hidden='true'> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
