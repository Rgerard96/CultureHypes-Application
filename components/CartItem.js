import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/outline';

export default function CartItem({ product }) {
  return (
    <>
      <li key={product.id} className='flex py-6'>
        <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className='h-full w-full object-cover object-center'
          />
        </div>

        <div className='ml-4 flex flex-1 flex-col'>
          <div>
            <h3 className='font-medium text-gray-900'>
              <a href={product.href}>{product.name}</a>
            </h3>
            <p className='mt-1 text-xs text-gray-500'>{product.color}</p>
          </div>
          <div className='flex flex-1 items-end justify-between'>
            <p className='font-medium text-gray-900'>{product.price}</p>

            <div className='flex items-center'>
              <div className=''>
                <MinusCircleIcon className='w-6 cursor-pointer text-blue-500' />
              </div>
              <div className='mx-2'>5</div>
              <div className=''>
                <PlusCircleIcon className='w-6 cursor-pointer text-blue-500' />
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
