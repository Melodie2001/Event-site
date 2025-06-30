import React from 'react';

const articles = [
  {
    title: "Youssoupha dévoile 'Amour Suprême'",
    summary: "Un album introspectif, profond et poétique. Découvrez les coulisses de sa création.",
    image: "/assets/youssoupha-news.jpg"
  },
];

const Blog = () => {
  return (
    <div className="bg-neutral-100 text-black px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-6 uppercase">Blog / Actualités</h1>
      <div className="max-w-4xl mx-auto space-y-6">
        {articles.map((a, index) => (
          <div key={index} className="bg-white rounded shadow flex flex-col md:flex-row overflow-hidden">
            <img src={a.image} alt={a.title} className="w-full md:w-1/3 h-56 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{a.title}</h2>
              <p className="text-gray-600 mt-2">{a.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
