import React from "react";
import styled from "styled-components";
import bgImage from "../assets/youssoupha.jpg";
import logo from "../assets/logo youssoupha doré.svg";
import filmImage from "../assets/film-youssoupha.jpg";
import albumImage from "../assets/album-youssoupha-avant.jpg";
import spotify from "../assets/Spotify.jpg";
import apple from "../assets/Apple music.jpg";
import amazon from "../assets/Amazon music.jpg";
import soundcloud from "../assets/Soundcloud.jpg";
import youtube from "../assets/Youtube music.jpg";
import { Link } from "react-router-dom"

const PageWrapper = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  background-attachment: fixed;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
`;

const Logo = styled.img`
  height: 60px;
  margin-bottom: 1.5rem;
`;

const TransparentBox = styled.div`
  background-color: rgba(150, 148, 148, 0.25);
  padding: 2rem;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 95vw;
  font-family: "Onest Variable", sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AlbumBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.h2`
  color: #facc15;
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const AlbumImage = styled.img`
  width: 240px;
  border-radius: 15px;
`;

const PlatformGrid = styled.div`
  display: grid;
  grid-template-areas:
    "apple amazon"
    "soundcloud youtube"
    "spotify spotify";
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-areas:
      "apple"
      "amazon"
      "soundcloud"
      "youtube"
      "spotify";
  }
`;

const PlatformCard = styled.a`
  background: #facc15;
  border-radius: 12px;
  padding: 0.7rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: black;
  font-weight: bold;
  text-decoration: none;
  justify-content: center;
  transition: transform 0.3s ease;
  font-family: "Onest Variable", sans-serif;

  &:hover {
    transform: scale(1.05);
  }
`;

const PlatformLogo = styled.img`
  width: 24px;
  height: 24px;
`;

const FilmContainer = styled.div`
  background: linear-gradient(135deg, #6D211A, #4e2d24af);
  padding: 6px;
  border-radius: 20px;
`;

const FilmBlock = styled.div`
  background: linear-gradient(to bottom, #6D211A, #4e2d24af);
  color: white;
  border-radius: 15px;
  padding: 1rem;
  width: 320px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  box-sizing: border-box;
`;

const FilmImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 0.8rem;
`;

const FilmTitle = styled.h3`
  text-decoration: underline;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const FilmDescription = styled.p`
  font-size: 0.95rem;
  margin: 0.4rem 0;
`;

const FilmButton = styled.a`
  background-color: red;
  color: white;
  font-weight: bold;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  font-size: 0.95rem;
  margin-top: 0.5rem;
`;

export default function Redirect() {
  return (
    <PageWrapper>
     <Link to={'/'}> <Logo src={logo} alt="Youssoupha logo" /> </Link> 
      <TransparentBox>
        <AlbumBlock>
          <Title>AMOUR SUPRÊME</Title>
          <AlbumImage src={albumImage} alt="Youssoupha Album" />
          <PlatformGrid>
            <PlatformCard
              href="https://music.apple.com/fr/album/amour-suprême/1716896127"
              style={{ gridArea: "apple" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PlatformLogo src={apple} alt="Apple Music" /> Apple Music
            </PlatformCard>
            <PlatformCard
              href="https://music.amazon.fr/albums/B0DTHZNTBP"
              style={{ gridArea: "amazon" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PlatformLogo src={amazon} alt="Amazon Music" /> Amazon Music
            </PlatformCard>
            <PlatformCard
              href="https://soundcloud.com/search?q=youssoupha%20amour%20supreme"
              style={{ gridArea: "soundcloud" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PlatformLogo src={soundcloud} alt="SoundCloud" /> SoundCloud
            </PlatformCard>
            <PlatformCard
              href="https://music.youtube.com/playlist?list=OLAK5uy_nEEmcClYgPoV28smQESjRwUgLUK1sBokY"
              style={{ gridArea: "youtube" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PlatformLogo src={youtube} alt="YouTube Music" /> YouTube Music
            </PlatformCard>
            <PlatformCard
              href="https://open.spotify.com/intl-fr/album/6kzCJEM3M7eidikn1PzaCr"
              style={{ gridArea: "spotify" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PlatformLogo src={spotify} alt="Spotify" /> Spotify
            </PlatformCard>
          </PlatformGrid>
        </AlbumBlock>

        <FilmContainer>
          <FilmBlock>
            <FilmTitle>Also Discover the Film</FilmTitle>
            <FilmImage src={filmImage} alt="Youssoupha Film" />
            <p style={{ fontSize: "0.95rem", fontWeight: "bold" }}>
              Youssoupha - AMOUR SUPRÊME (The Film)
            </p>
            <FilmDescription>
              Produced by Youssoupha and co-directed by Arpheno
            </FilmDescription>
            <FilmButton
              href="https://youtu.be/0fdMyTr_GfE?si=z3OWsiPLEKCHL9kL"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch the Film
            </FilmButton>
          </FilmBlock>
        </FilmContainer>
      </TransparentBox>
    </PageWrapper>
  );
}
