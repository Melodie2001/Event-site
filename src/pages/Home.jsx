import React from "react";
import styled from "styled-components";
import albumAvant from "../assets/album-youssoupha-avant.png.jpg";
import albumDos from "../assets/album-youssoupha-dos.png.jpg";
import bgImage from "../assets/youssoupha.png.jpg";
import artisteImage from "../assets/youssoupha-artiste3.svg?url";
import SocialCarousel from "../components/SocialCarousel";




const PageWrapper = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: top center;
  min-height: 100vh;
  position: relative;
`;

const Title = styled.h1`
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 4.5rem;
  font-weight: 900;
  color: #facc15; /* jaune */
  letter-spacing: 0.2rem;
  z-index: 2;
`;

const AlbumContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding-top: 200px;
  position: relative;
  z-index: 1;
`;

const AlbumImage = styled.img`
  width: 240px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
`;

const CallToAction = styled.div`
  margin: 3rem auto;
  background: black;
  color: white;
  display: flex;
  align-items: center;
  padding: 1.5rem 2rem;
  border-radius: 10px;
  width: fit-content;
  gap: 1.5rem;
`;

const Button = styled.a`
  background-color: #facc15;
  color: black;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const ArtistBlock = styled.div`
  background-color: #8B0000;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  gap: 3rem;
`;

const ArtistImage = styled.img`
  width: 280px;
  border-radius: 15px;
  object-fit: contain;
`;

const ArtistText = styled.div`
  max-width: 400px;
  font-weight: bold;
  font-size: 1.5rem;
`;

const ArtistButton = styled.a`
  margin-top: 1rem;
  display: inline-block;
  background-color: #facc15;
  color: black;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
`;

export default function Home() {
  return (
    <PageWrapper>
      <Title>YOUSSOUPHA</Title>

      <AlbumContainer>
        <AlbumImage src={albumAvant} alt="Album Avant" />
        <AlbumImage src={albumDos} alt="Album Dos" />
      </AlbumContainer>

      <CallToAction>
        <p>AMOUR SUPRÊME <br /> EST SORTI</p>
        <Button href="/redirect">écouter <br /> maintenant</Button>
      </CallToAction>

      <ArtistBlock>
        <ArtistImage src={artisteImage} alt="Youssoupha" />
        <div>
          <ArtistText>Qui est-il ? D’où vient-il ?</ArtistText>
          <ArtistButton href="/artist">Découvrez l’artiste</ArtistButton>
        </div>
      </ArtistBlock>µ
      <SocialCarousel />
    </PageWrapper>
  );
}
