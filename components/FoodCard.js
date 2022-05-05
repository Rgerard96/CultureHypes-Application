import { PlusSmIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import Cart from './Cart';
import Modal from './Modal';

export default function FoodCard() {
  const [cart, setCart] = useState(false);
  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    setModal(!modal);
  };
  const cartHandler = () => {
    setCart(!cart);
  };
  return (
    <div className='relative mb-5 flex flex-row justify-between overflow-hidden rounded-lg border border-gray-300 bg-white p-3 sm:items-center sm:justify-start'>
      <Cart cart={cart} setCart={setCart} />
      <Modal modal={modal} setModal={setModal} cartHandler={cartHandler} />
      <div
        className='sm:min-h-36 2xl:min-h-48 order-2 -m-3 h-20 w-20 flex-none rounded-bl-lg bg-cover bg-center bg-no-repeat sm:order-none sm:-m-0 sm:mr-8 sm:w-36 sm:rounded-lg 2xl:w-48'
        style={{
          backgroundImage: 'url(' + '../images/food.jpg' + ')',
        }}
      ></div>
      <div className='order-1 flex w-3/5 flex-initial flex-col sm:order-none sm:w-1/2 md:w-3/5'>
        <h3 className='font-semibold md:text-lg 2xl:text-xl'>
          Margherita pizza
        </h3>
        <p className='mb-3 text-sm 2xl:text-base'>Tomatensaus en kaas</p>
        <p className='mb-10 text-xs italic text-gray-500 sm:mb-0 2xl:text-sm'>
          Keuze uit: Ham (kalkoen), Salami (rund), Kipfilet, Gehakt (rund),
          Shoarma (lams) en meer.
        </p>
      </div>
      <div className='absolute left-0 bottom-0 p-3 sm:left-auto sm:bottom-auto sm:top-0 sm:right-0 '>
        <p className='font-bold 2xl:text-lg'>€ 17.50</p>
      </div>
      <div
        className='absolute bottom-0 right-0 flex w-20 cursor-pointer items-center justify-center rounded-tl-lg bg-blue-500 py-2 sm:hover:bg-blue-600'
        onClick={modalHandler}
      >
        <PlusSmIcon className='w-6 text-white' />
      </div>
    </div>
  );
}
