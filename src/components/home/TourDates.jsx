import { useState, useEffect } from "react";
import dbProviders from "../../Providers/dbProviders"; // ✅ chemin corrigé
import background from "../../assets/background2.jpg"; // ✅ même logique si image déplacée

const TourDates = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getAllData = async () => {
      const list = await dbProviders.getAllData("events");
      setEvents(list);
    };
    getAllData();
  }, []);

  return (
    <section
      style={{ backgroundImage: `url(${background})` }}
      className="text-white px-6 sm:px-12 py-16"
    >
      <h2 className="text-white text-3xl lg:text-4xl font-bold mb-12">
        DATES DE TOURNÉE
      </h2>

      {events.map((event) => (
        <div key={event.id} className="mb-10">
          <h3 className="text-yellow-400 text-2xl font-bold">
            {event.data.date.toDate().toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
            })}{" "}
            <span className="text-white font-normal">| {event.data.ville}</span>
          </h3>
          <p className="mt-2">
            {event.data.pays}
            <br />
            Dans le cadre du/de {event.data.lieux}
          </p>
          <button className="mt-4 bg-yellow-400 text-black font-semibold px-6 py-2 rounded-md hover:bg-yellow-300 transition">
            réserver
          </button>
        </div>
      ))}
    </section>
  );
};

export default TourDates;

