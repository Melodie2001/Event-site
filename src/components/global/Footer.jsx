import { Link } from "react-router-dom";
import {
  FaYoutube,
  FaSpotify,
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaApple,
  FaTiktok,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black text-white py-16 px-8 sm:px-16 lg:px-32">
      <div className="flex flex-col lg:flex-row justify-start gap-16">
        {/* Navigation */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Navigation</h2>
          <div className="space-y-3 text-[15px] leading-tight">
            <Link to="/artist" className="lg:text-xl text-white font-bold block">
              About
            </Link>
            <Link to="/redirect" className="lg:text-xl text-white font-bold block">
              Tracklist
            </Link>
          </div>
        </div>

        {/* Socials */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Socials</h2>
          <div className="grid grid-cols-3 gap-6 text-2xl">
            <a
              href="https://youtu.be/0fdMyTr_GfE?si=z3OWsiPLEKCHL9kL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="hover:scale-110 transition text-[#FF0000]" />
            </a>
            <a
              href="https://open.spotify.com/intl-fr/album/6kzCJEM3M7eidikn1PzaCr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSpotify className="hover:scale-110 transition text-[#1DB954]" />
            </a>
            <a
              href="https://www.instagram.com/youssouphamusik/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:scale-110 transition text-white" />
            </a>
            <a
              href="https://twitter.com/youssouphamusik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="hover:scale-110 transition text-white" />
            </a>
            <a
              href="https://www.facebook.com/youssouphaofficiel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:scale-110 transition text-[#1877F2]" />
            </a>
            <a
              href="https://music.apple.com/fr/album/amour-suprême/1716896127"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaApple className="hover:scale-110 transition text-white" />
            </a>
            <a
              href="https://www.tiktok.com/@youssoupha_musik?lang=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-3 flex justify-center"
            >
              <FaTiktok className="text-white hover:text-pink-500 hover:drop-shadow-[0_0_4px_#dba2bf] transition" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
















