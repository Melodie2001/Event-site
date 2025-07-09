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
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden; 
`;


const ContentBlock = styled.div`
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 25px;
  padding: 3rem 4rem;
  max-width: 1100px;
  width: 100%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  color: black;
  font-family: 'Onest Variable', sans-serif;
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
  gap: 1rem; /* réduit l’espace entre image et texte */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextBlock = styled.div`
  flex: 1;
  max-width: 460px;
  font-size: 0.95rem;
  color: black;
`;

const Image = styled.img`
  width: 380px;
  height: auto;
`;

const SectionTitle = styled.h2`
  font-weight: 900;
  margin-bottom: 1rem;
`;

export default function Artist() {
  return (
    <PageWrapper>
      <Logo src={logo} alt="Logo Youssoupha" />
      <ContentBlock>
        <Section>
          <Image src={image1} alt="Youssoupha portrait" />
          <TextBlock>
            <SectionTitle>CHAQUE JOUR IL FAUT S’AIMER</SectionTitle>
            <p>
              <strong>Youssoupha Mabiki</strong> naît le 29 août 1979 à Kinshasa au Zaïre. Fils du musicien congolais Tabu Ley Rochereau et de sa mère d’origine sénégalaise, il arrive en France à l’âge de 10 ans pour y étudier. 
              Après avoir obtenu la meilleure note de l’académie de Versailles à l’oral de français, il poursuit son cursus universitaire à la Sorbonne Nouvelle avant de se consacrer pleinement à la musique.
            </p>
            <p style={{ marginTop: "0.8rem" }}>
              En mars 2007 il sort son premier street album, <em>À chaque frère</em>, qui rencontre un franc succès malgré les réserves de l’artiste. 
              Sur les années qui suivent, entre les procès et les polémiques, l’artiste diversifie sa plume et cumule plus de 100000 albums vendus à ce jour lui valant 3 disques d’or et un de platine.
            </p>
          </TextBlock>
        </Section>

        <Section>
          <TextBlock>
            <SectionTitle>AMOUR SUPRÊME</SectionTitle>
            <p>
              Ce nouvel album, 7ème de sa conception comporte 13 morceaux avec deux morceaux supplémentaires dans l’édition collector. 
              Youssoupha y propose des textes aux fortes influences gospel et soul.
            </p>
            <p style={{ marginTop: "0.8rem" }}>
              Prochainement en tournée dans le cadre du <em>Suprême Tour</em>, ne manquez pas l’occasion d’écouter l’artiste parolier en live proche de chez-vous.
            </p>
            <p style={{ marginTop: "0.8rem" }}>
              3 ans séparent cet album de son dernier. Une rupture de silence marquée par un Youssoupha changé, assagi et ressourcé par ses aventures personnelles. 
              Il s’agit d’un renouveau de sa musique, une recherche de soi qui se solde en une ascension spirituelle.
            </p>
          </TextBlock>
          <Image src={image2} alt="Youssoupha en studio" />
        </Section>
      </ContentBlock>
    </PageWrapper>
  );
}

