import React, { useEffect, useState } from 'react';
import { XIcon } from '@heroicons/react/solid';

export default function Modal({ modal, setModal, cartHandler }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(modal);
  }, [modal]);

  const handler = () => {
    cartHandler();
    setModal(!modal);
  };

  return (
    <div
      className={`pointer-events-auto fixed inset-0 z-20 items-center justify-center overflow-hidden bg-gray-500 bg-opacity-75 p-5 ${
        open ? 'flex' : 'hidden'
      }`}
    >
      <div className='max-w-md rounded-lg border bg-white p-5'>
        <div className=' z-30 mb-5 flex items-center justify-between border-b pb-5'>
          <p>Modal</p>
          <button
            type='button'
            className='-m-2 p-2 text-gray-500 focus:outline-none'
            onClick={() => setModal(!modal)}
          >
            <span className='sr-only'>Close panel</span>
            <XIcon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <p className='mb-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquid
          laudantium exercitationem quos accusamus, molestias commodi quo ab,
          ipsam non dolorum dolores repellat debitis iusto dolor obcaecati
          incidunt doloribus laborum ut maxime, quia ad accusantium. Neque sit
          adipisci quia architecto omnis nihil repellendus vel earum nostrum
          dolor, ullam, dolore iure.
        </p>
        <div
          className='cursor-pointer rounded-lg bg-blue-500 py-2 px-4 text-center text-white lg:hover:bg-blue-600'
          onClick={handler}
        >
          Afrekenen
        </div>
      </div>
    </div>
  );
}
