import React from "react";
import styled from "styled-components";
import albumAvant from "../assets/album-youssoupha-avant.jpg";
import albumDos from "../assets/album-youssoupha-dos.jpg";
import bgImage from "../assets/youssoupha.jpg";
import artisteImage from "../assets/youssoupha-artiste3.svg?url";
import logo from "../assets/logo youssoupha doré.svg";
import SocialCarousel from "../components/SocialCarousel";
import Tracklist from "../components/home/MiniTracklist";
import Tour from "../components/home/TourDates";
import Footer from "../components/global/Footer";

const PageWrapper = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: top center;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
`;

const LogoImage = styled.img`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  height: 75px;
  z-index: 2;

  @media (max-width: 600px) {
    height: 60px;
  }
`;

const AlbumContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding-top: 180px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding-top: 140px;
  }
`;

const AlbumImage = styled.img`
  width: 260px;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);

  @media (max-width: 600px) {
    width: 200px;
  }
`;

const CallToAction = styled.div`
  margin: 3rem auto;
  background: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-radius: 10px;
  width: 450px;
  gap: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 90%;
    text-align: center;
  }
`;

const CallText = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.4;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Button = styled.a`
  background-color: #f7b846;
  color: black;
  font-weight: bold;
  padding: 0.85rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.3s ease;
  text-align: center;
  line-height: 1.3;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ArtistBlock = styled.div`
  background: linear-gradient(90deg, #d42020e5, #6e1110);
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ArtistImage = styled.img`
  width: 520px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ArtistTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const ArtistText = styled.h2`
  max-width: 500px;
  font-size: 2rem;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ArtistButton = styled.a`
  background-color: #f7b846;
  color: black;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  width: fit-content;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 600px) {
    width: 80%;
    font-size: 1rem;
  }
`;

export default function Home() {
  return (
    <PageWrapper>
      <LogoImage src={logo} alt="Youssoupha Logo" />

      <AlbumContainer>
        <AlbumImage src={albumAvant} alt="Album Front" />
        <AlbumImage src={albumDos} alt="Album Back" />
      </AlbumContainer>

      <CallToAction>
        <CallText>
          AMOUR SUPRÊME <br /> IS OUT NOW
        </CallText>
        <Button href="/redirect">
          Listen <br /> Now
        </Button>
      </CallToAction>

      <ArtistBlock id="about">
        <ArtistImage src={artisteImage} alt="Youssoupha" />
        <ArtistTextBlock>
          <ArtistText>Who is he? Where does he come from?</ArtistText>
          <ArtistButton href="/artist">Discover the Artist</ArtistButton>
        </ArtistTextBlock>
      </ArtistBlock>

      <div id="tracklist">
        <Tracklist />
      </div>

      <div id="tour">
        <Tour />
      </div>

      <div id="news">
        <SocialCarousel />
      </div>

      <Footer />
    </PageWrapper>
  );
}
