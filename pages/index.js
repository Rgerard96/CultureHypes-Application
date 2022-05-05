import { ChevronDownIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <div className='container mx-auto px-5 pt-10'>
      <Head>
        <title>Food Application</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='mx-auto max-w-5xl text-center'>
        <h1 className='mb-8 text-5xl font-bold sm:text-6xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h1>
        <p className='mx-auto mb-8 max-w-2xl text-gray-600'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
          neque consequuntur cum quam repudiandae molestiae dolorem sint
          necessitatibus aliquam cumque?
        </p>

        <div className='mx-auto mb-20 max-w-xl overflow-hidden'>
          <div className='flex flex-col items-center justify-between rounded-lg border border-gray-300 bg-white p-5 md:h-16 md:flex-row md:p-0'>
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
              <div
                className='cursor-pointer rounded-lg bg-blue-500 py-2 px-14 text-white lg:hover:bg-blue-600'
                onClick={() => router.push('/bestellen')}
              >
                Zoek
              </div>
            </div>
          </div>
        </div>
        {/* <div className='mx-auto flex max-w-xl flex-col justify-between sm:flex-row'>
          <div className='group relative mb-5  h-full flex-1 rounded-lg border bg-white px-4 py-2 shadow-md sm:mr-5 sm:mb-0 lg:mr-16'>
            <LocationMarkerIcon className='pointer-events-none absolute top-3 left-4 w-4 text-gray-400' />
            <input
              type='text'
              name='search'
              id='search'
              placeholder='Stad'
              className='w-full px-8 focus:outline-none'
            />
            <ChevronDownIcon className='pointer-events-none absolute right-4 top-3 ml-3 w-4 text-gray-400' />
          </div>
          <div
            className='cursor-pointer rounded-lg bg-blue-500 py-2 text-white shadow-md hover:bg-blue-600 lg:w-36'
            onClick={() => router.push('/bestellen')}
          >
            Zoek
          </div>
        </div> */}
        <div className='grid-col-1 mx-auto grid gap-10 sm:grid-cols-3'>
          <div className='rounded-lg border border-gray-300 bg-white p-10'>
            <img src='./images/eating.svg' alt='Eating' className='mb-5' />
            <h2 className='mb-2 text-xl font-bold'>Lorem ipsum dolor</h2>
            <p className='text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              natus voluptatibus amet?
            </p>
          </div>
          <div className='rounded-lg border border-gray-300 bg-white p-10'>
            <img src='./images/eating.svg' alt='Eating' className='mb-5' />
            <h2 className='mb-2 text-xl font-bold'>Lorem ipsum dolor</h2>
            <p className='text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              natus voluptatibus amet?
            </p>
          </div>
          <div className='rounded-lg border border-gray-300 bg-white p-10'>
            <img src='./images/eating.svg' alt='Eating' className='mb-5' />
            <h2 className='mb-2 text-xl font-bold'>Lorem ipsum dolor</h2>
            <p className='text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              natus voluptatibus amet?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
