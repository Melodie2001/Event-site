import { useState, useEffect } from "react";
import dbProviders from "../../Providers/dbProviders";

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
    <section className="text-white px-4 sm:px-10 py-16">
      <h2 className="text-white text-3xl lg:text-4xl font-bold mb-12 text-center sm:text-left">
        DATES DE TOURNÉE
      </h2>

      {events.map((event) => (
        <div
          key={event.id}
          className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div className="sm:max-w-[70%]">
            <h3 className="text-yellow-400 text-2xl font-bold">
              {event.data.date.toDate().toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
              })}{" "}
              <span className="text-white font-normal">| {event.data.ville}</span>
            </h3>
            <p className="mt-2 text-sm sm:text-base">
              {event.data.pays}
              <br />
              Dans le cadre du/de {event.data.lieux}
            </p>
          </div>

          <div className="sm:self-start sm:mt-0">
            <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-md hover:bg-yellow-300 transition w-full sm:w-auto">
              réserver
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TourDates;
