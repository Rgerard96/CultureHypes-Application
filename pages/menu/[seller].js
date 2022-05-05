import { useRouter } from 'next/router';
import ContactInfo from '../../components/ContactInfo';
import FoodCard from '../../components/FoodCard';

export default function Seller() {
  const router = useRouter();

  return (
    <div className='max-w-7xl mx-auto px-5'>
      <div
        className='mb-10 overflow-hidden rounded-lg border border-gray-300 relative h-32 sm:h-60'
        style={{
          backgroundImage: 'url(' + '../images/food.jpg' + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='absolute bottom-0 left-0'>
          <div
            className='h-20 w-20 rounded-tr-lg sm:h-36 sm:w-36'
            style={{
              backgroundImage: 'url(' + '../images/person.jpg' + ')',
              backgroundSize: 'cover',
            }}
          ></div>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-10 sm:grid-cols-3'>
        <div className='col-span-2'>
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </div>
        <ContactInfo />
      </div>
    </div>
  );
}
