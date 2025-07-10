import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import background from "../../assets/youssoupha.jpg";
import pochette from "../../assets/Pochette.jpg";

const Tracklist = () => {
  const [shown, setShown] = useState(false);

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundColor: "rgba(150, 148, 148, 0.25)",
        backgroundBlendMode: "lighten",
      }}
      className="w-full bg-cover bg-center h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-full lg:h-100 font-[Onest]"
    >
      {/* Pochette album cliquable */}
      <div
        style={{ backgroundImage: `url(${pochette})` }}
        className="relative z-50 bg-cover bg-center lg:translate-y-10 w-64 h-60 translate-y-1 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-90 lg:h-80 ml-5 sm:ml-10 md:ml-20"
        onClick={() => setShown(!shown)}
      ></div>

      {/* Titre Album */}
      <h1 className="translate-y-[-14.5rem] ml-75 text-3xl lg:translate-y-[-17rem] lg:ml-170 font-bold lg:text-5xl font-[Onest]">
        AMOUR SUPRÊME
      </h1>

      <AnimatePresence mode="wait">
        {shown ? (
          // Bloc Spotify
          <motion.div
            key="iframe"
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 2, ease: "easeOut" },
            }}
            exit={{
              x: -300,
              opacity: 0,
              transition: { duration: 1, ease: "easeOut" },
            }}
            style={{ position: "relative" }}
            className="translate-y-0 ml-21 lg:ml-[0.5%] lg:translate-y-[-2rem]"
          >
            <motion.div
              initial={{ opacity: 1 }}
              animate={{
                opacity: 0,
                transition: { delay: 1.5, duration: 1.5 },
              }}
              style={{
                position: "absolute",
                top: 0,
                left: "24%",
                transform: "translateY(-12rem)",
                backgroundColor: "rgba(255, 0, 0, 0.6)",
                borderRadius: "12px",
                zIndex: 10,
              }}
              className="h-[150px] translate-y-[-1rem] w-[75%] lg:w-[76.5%] lg:h-[152px]"
            />
            <iframe
              style={{
                borderRadius: "12px",
                marginLeft: "24%",
                transform: "translateY(-12rem)",
              }}
              className="relative z-50 translate-y-[-1rem] translate-x-[-4rem] w-[80%] lg:w-[78.5%] lg:translate-x-[-3.5rem]"
              src="https://open.spotify.com/embed/album/6kzCJEM3M7eidikn1PzaCr?utm_source=generator"
              height="152"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </motion.div>
        ) : (
          // Bloc Infos
          <motion.div
            key="infos"
            initial={{ x: 300, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, ease: "easeOut" },
            }}
            exit={{
              x: 200,
              opacity: 0,
              transition: { duration: 1, ease: "easeOut" },
            }}
            className="ml-75 translate-y-[-12rem] md:ml-150 lg:ml-180 lg:translate-y-[-13rem]"
          >
            <div className="text-black space-y-3 text-[15px] leading-tight font-[Onest]">
              <div className="flex">
                <span className="lg:text-3xl font-bold min-w-[70px]">
                  Release:
                </span>
                <span className="lg:text-3xl">January 24, 2025</span>
              </div>
              <div className="flex">
                <span className="lg:text-3xl font-bold min-w-[70px]">
                  Duration:
                </span>
                <span className="lg:text-3xl">35:46</span>
              </div>
              <div className="flex">
                <span className="lg:text-3xl font-bold min-w-[70px]">
                  Label:
                </span>
                <span className="lg:text-3xl">99 REVOLUTION</span>
              </div>
              <div className="flex">
                <span className="lg:text-3xl font-bold min-w-[70px]">
                  Artist:
                </span>
                <span className="lg:text-3xl">Youssoupha</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tracklist;
