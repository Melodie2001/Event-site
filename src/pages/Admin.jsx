import React, { useState } from 'react';

const Admin = () => {
  const [dates, setDates] = useState([]);
  const [form, setForm] = useState({ date: '', city: '', place: '', soldOut: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleAdd = () => {
    setDates([...dates, form]);
    setForm({ date: '', city: '', place: '', soldOut: false });
  };

  const handleDelete = (index) => {
    setDates(dates.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white text-black px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-6 uppercase">Administration – Tournée</h1>

      <div className="max-w-2xl mx-auto space-y-4">
        <input name="date" value={form.date} onChange={handleChange} placeholder="Date" className="w-full p-2 border rounded" />
        <input name="city" value={form.city} onChange={handleChange} placeholder="Ville" className="w-full p-2 border rounded" />
        <input name="place" value={form.place} onChange={handleChange} placeholder="Lieu" className="w-full p-2 border rounded" />
        <label className="flex items-center gap-2">
          <input type="checkbox" name="soldOut" checked={form.soldOut} onChange={handleChange} />
          Sold-out
        </label>
        <button onClick={handleAdd} className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          Ajouter
        </button>

        <div className="mt-8">
          {dates.map((d, i) => (
            <div key={i} className="flex justify-between border-b py-2">
              <span>{d.date} – {d.city} – {d.place} {d.soldOut && '(Sold-out)'}</span>
              <button onClick={() => handleDelete(i)} className="text-red-600 hover:underline">Supprimer</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;

