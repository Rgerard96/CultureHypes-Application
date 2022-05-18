import React, { useState, useEffect } from 'react';

export default function DatePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());

  function getAllDaysInMonth(year, month, day) {
    const date = new Date(year, month, day);

    const dates = [];

    while (date.getMonth() === month) {
      dates.push({
        day: new Date(date).getDay(),
        date: new Date(date).getDate(),
      });
      date.setDate(date.getDate() + 1);
    }

    return dates;
  }

  const now = new Date();

  // 👇️ all days of the current month
  const dates = getAllDaysInMonth(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );

  console.log(selectedDate);

  const textDays = ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'];

  return (
    <div className='space-x-3 flex overflow-y-auto pb-2'>
      {dates.map((date, index) => (
        <div
          key={index}
          className={
            selectedDate === date.date
              ? activeClass.active
              : activeClass.notActive
          }
          onClick={() => setSelectedDate(date.date)}
        >
          <p>{date.date}</p>
          <p className='uppercase'>{textDays[date.day]}</p>
        </div>
      ))}
    </div>
  );
}

const activeClass = {
  active:
    'bg-blue-500 rounded-lg flex flex-col items-center justify-center sm:space-y-1 py-2 px-5 sm:px-8 text-white border border-gray-300 cursor-pointer',
  notActive:
    'bg-white rounded-lg flex flex-col items-center justify-center sm:space-y-1 py-2 px-5 sm:px-8 border border-gray-300 cursor-pointer',
};
