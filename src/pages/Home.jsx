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
`;

const AlbumContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding-top: 180px;
  position: relative;
  z-index: 1;
`;

const AlbumImage = styled.img`
  width: 260px;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
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
  gap: 3rem;
`;

const CallText = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.4;
`;

const Button = styled.a`
  background-color: #F7B846;
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
`;

const ArtistBlock = styled.div`
  background: linear-gradient(90deg, #D42020E5, #6E1110);
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  gap: 3rem;
`;

const ArtistImage = styled.img`
  width: 520px;
  object-fit: cover;
`;

const ArtistTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
`;

const ArtistText = styled.h2`
  max-width: 500px;
  font-size: 2rem;
  font-weight: 800;
`;

const ArtistButton = styled.a`
  background-color: #F7B846;
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
`;

export default function Home() {
  return (
    <PageWrapper>
      <LogoImage src={logo} alt="Logo Youssoupha" />

      <AlbumContainer>
        <AlbumImage src={albumAvant} alt="Album Avant" />
        <AlbumImage src={albumDos} alt="Album Dos" />
      </AlbumContainer>

      <CallToAction>
        <CallText>
          AMOUR SUPRÊME <br /> EST SORTI
        </CallText>
        <Button href="/redirect">
          écouter <br /> maintenant
        </Button>
      </CallToAction>

      <ArtistBlock>
        <ArtistImage src={artisteImage} alt="Youssoupha" />
        <ArtistTextBlock>
          <ArtistText>Qui est-il ? D’où vient-il ?</ArtistText>
          <ArtistButton href="/artist">Découvrez l’artiste</ArtistButton>
        </ArtistTextBlock>
      </ArtistBlock>

      <Tour /> 
      <Tracklist />
      <SocialCarousel />
      <Footer /> 
    </PageWrapper>
  );
}


