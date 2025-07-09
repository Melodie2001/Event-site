const Footer = () => {
  return (
    <div className="bg-black text-white py-16 px-8 sm:px-16 lg:px-32">
      {/* Titre */}
      <h2 className="text-4xl sm:text-4xl mr-170 font-bold mb-8">Navigation</h2>

      {/* Liens */}
      <div className="text-black space-y-3 text-[15px] ml-5 leading-tight">
        <div className="flex">
          <a
            href="#about"
            className="lg:text-xl text-white font-bold min-w-[70px]"
          >
            À propos
          </a>
        </div>
        <div className="flex">
          {" "}
          <a
            href="#tracklist"
            className="lg:text-xl text-white font-bold min-w-[70px]"
          >
            Tracklist
          </a>
        </div>{" "}
        <div className="flex">
          {" "}
          <a
            href="#tour"
            className="lg:text-xl text-white font-bold min-w-[70px]"
          >
            Dates de tournée
          </a>
        </div>{" "}
        <div className="flex">
          <a
            href="#news"
            className="lg:text-xl text-white font-bold min-w-[70px]"
          >
            News
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;











