import React, {useState} from 'react';

export default function DeliveryOption() {
  const [active, setActive] = useState('afhalen');
  return (
    <div className='rounded-lg bg-white border w-full sm:w-fit flex'>
      <div className={active === 'afhalen' ? activeClass.active : activeClass.notActive} onClick={() => setActive('afhalen')}>Afhalen</div>
      <div className={active === 'bezorgen' ? activeClass.active : activeClass.notActive} onClick={() => setActive('bezorgen')}>Bezorgen</div>
    </div>
  );
}

const activeClass = {
  active: 'bg-blue-500 text-white rounded-lg py-1 px-3 cursor-pointer text-center flex-1 ',
  notActive: 'border border-transparent py-1 px-3 cursor-pointer text-center flex-1',
}; 
