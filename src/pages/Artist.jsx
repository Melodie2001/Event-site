import React from "react";
import styled from "styled-components";
import bgImage from "../assets/youssoupha.jpg";
import image1 from "../assets/youssoupha-artiste2.jpg";
import image2 from "../assets/youssoupha-artiste1.jpg";
import logo from "../assets/logo youssoupha doré.svg";

const PageWrapper = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  background-attachment: fixed;
  min-height: 100vh;
  width: 100%;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const ContentBlock = styled.div`
  background-color: rgba(150, 148, 148, 0.25);
  border-radius: 25px;
  padding: 2rem;
  max-width: 1100px;
  width: 100%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  color: black;
  font-family: 'Onest Variable', sans-serif;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Logo = styled.img`
  height: 65px;
  margin-bottom: 2rem;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 3rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextBlock = styled.div`
  flex: 1;
  max-width: 460px;
  font-size: 1rem;
  color: black;
  line-height: 1.6;
  text-align: justify;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 0.95rem;
  }
`;

const Image = styled.img`
  width: 380px;
  height: auto;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 360px;
  }
`;

const SectionTitle = styled.h2`
  font-weight: 900;
  font-size: 1.6rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    text-align: center;
  }
`;

export default function Artist() {
  return (
    <PageWrapper>
      <Logo src={logo} alt="Youssoupha logo" />
      <ContentBlock>
        <Section>
          <Image src={image1} alt="Youssoupha portrait" />
          <TextBlock>
            <SectionTitle>LOVE YOURSELF EVERY DAY</SectionTitle>
            <p>
              <strong>Youssoupha Mabiki</strong> was born on August 29, 1979, in Kinshasa, Zaire. Son of the Congolese musician Tabu Ley Rochereau and a Senegalese mother, he moved to France at the age of 10 to pursue his education.
              After earning the highest French oral exam score in the Versailles district, he continued his academic journey at Sorbonne Nouvelle before fully dedicating himself to music.
            </p>
            <p style={{ marginTop: "0.8rem" }}>
              In March 2007, he released his first street album, <em>À chaque frère</em>, which was a great success despite the artist's initial reservations. Over the years, amidst lawsuits and controversies, he evolved his lyrical style and has sold over 100,000 albums, earning 3 gold records and 1 platinum.
            </p>
          </TextBlock>
        </Section>

        <Section>
          <TextBlock>
            <SectionTitle>SUPREME LOVE</SectionTitle>
            <p>
              This new album, his 7th, contains 13 tracks, with two bonus songs in the collector's edition.
              Youssoupha delivers lyrics influenced strongly by gospel and soul.
            </p>
            <p style={{ marginTop: "0.8rem" }}>
              Soon to be on tour with the <em>Suprême Tour</em>, don’t miss the opportunity to hear this lyrical artist live near you.
            </p>
            <p style={{ marginTop: "0.8rem" }}>
              This album comes three years after his last one. A break marked by a transformed Youssoupha — calmer, wiser, and reenergized by his personal experiences.
              This is a renewal of his music, a journey of self-discovery leading to a spiritual elevation.
            </p>
          </TextBlock>
          <Image src={image2} alt="Youssoupha in the studio" />
        </Section>
      </ContentBlock>
    </PageWrapper>
  );
}



