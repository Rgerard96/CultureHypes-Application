import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import Filters from './Filters';
import Menu from './Menu';

export default function SlideOver({ slideOver, setSlideOver, type }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(slideOver);
  }, [slideOver]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-20 overflow-hidden'
        onClose={setSlideOver}
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
          <div
            className={`${
              type === 'cart' ? 'pt-10' : 'pl-10'
            } fixed inset-y-0 right-0 flex
            max-w-full`}
          >
            <Transition.Child
              as={Fragment}
              enter='transform transition ease-in-out duration-500 sm:duration-700'
              enterFrom={
                type === 'cart' ? 'translate-y-full' : 'translate-x-full'
              }
              enterTo={type === 'cart' ? 'translate-y-0' : 'translate-x-0'}
              leave='transform transition ease-in-out duration-500 sm:duration-700'
              leaveFrom={type === 'cart' ? 'translate-y-0' : 'translate-x-0'}
              leaveTo={
                type === 'cart' ? 'translate-y-full' : 'translate-x-full'
              }
            >
              <div className='w-screen max-w-md'>
                <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                  <div className='flex-1 overflow-y-auto py-6 px-4 sm:px-6'>
                    <div className='flex items-start justify-between'>
                      <Dialog.Title className='text-lg font-medium text-gray-900'>
                        Filters
                      </Dialog.Title>
                      <div className='ml-3 flex h-7 items-center'>
                        <button
                          type='button'
                          className='-m-2 p-2 text-gray-500 focus:outline-none'
                          onClick={() => setSlideOver(!slideOver)}
                        >
                          <span className='sr-only'>Close panel</span>
                          <XIcon className='h-6 w-6' aria-hidden='true' />
                        </button>
                      </div>
                    </div>

                    <div className='mt-8'>
                      {type === 'menu' && <Menu />}
                      {type === 'filter' && <Filters />}
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
