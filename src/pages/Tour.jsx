import React from 'react';

const concerts = [
  { date: '12.02', city: 'Lille', place: 'Zénith de Lille' },
  { date: '27.02', city: 'Lyon', place: 'Halle Tony Garnier' },
  { date: '04.03', city: 'Paris', place: 'Accor Arena' },
];

const Tour = () => {
  return (
    <div className="bg-white text-black px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-6 uppercase">Tournée</h1>
      <div className="max-w-2xl mx-auto space-y-4">
        {concerts.map((concert, index) => (
          <div key={index} className="flex justify-between border-b pb-2 text-lg">
            <span>{concert.date}</span>
            <span>{concert.city} – {concert.place}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tour;


