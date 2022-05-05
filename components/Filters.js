const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: false },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
];

export default function Filters() {
  return (
    <div className='bg-white'>
      <div className='space-y-6'>
        {filters[0].options.map((option, optionIdx) => (
          <div key={option.value} className='flex items-center'>
            <input
              id={`filter-mobile-${optionIdx}-${optionIdx}`}
              name={`${optionIdx}[]`}
              defaultValue={option.value}
              type='checkbox'
              defaultChecked={option.checked}
              className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
            />
            <label
              htmlFor={`filter-mobile-${optionIdx}-${optionIdx}`}
              className='ml-3 min-w-0 flex-1 text-gray-500'
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
