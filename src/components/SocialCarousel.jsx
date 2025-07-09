import React from "react";
import img1 from "../assets/youssoupha-post1.jpg";
import img2 from "../assets/youssoupha-post2.jpg";
import img3 from "../assets/youssoupha-post3.jpg";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  background: transparent;
  padding: 4rem 2rem;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  color: white;
  width: 200px;
  text-align: left;
  line-height: 1.2;
`;

const CarouselContainer = styled.div`
  display: flex;
  gap: 2rem;
  transition: transform 0.4s ease;
`;

const Slide = styled.a`
  display: block;
  width: 160px;
  height: 280px;
  background: #ddd;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
  transition: transform 0.3s, opacity 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const slides = [
  {
    image: img1,
    link: "https://www.instagram.com/p/DL0YuOToUaC/?img_index=1&igsh=dDlzMGxsbzZjYmlj"
  },
  {
    image: img2,
    link: "https://www.instagram.com/p/DLnXdTeoJOv/?img_index=4&igsh=MW5zZjF2emdtajBwcA=="
  },
  {
    image: img3,
    link: "https://vm.tiktok.com/ZMHbTU92r5paq-cg9d1/"
  }
];

export default function SocialCarousel() {
  return (
    <Wrapper>
      <Title>
        DERNIÈRES<br />
        NEWS
      </Title>
      <CarouselContainer>
        {slides.map((item, index) => (
          <Slide
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={item.image} alt={`slide-${index}`} />
          </Slide>
        ))}
      </CarouselContainer>
    </Wrapper>
  );
}
