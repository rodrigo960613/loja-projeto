import React, { useState } from "react";
import styled from "styled-components";
import card from "../assets/card.png";
import BuyBox from "./BuyBox";
import Card from "./Card";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start; 
  gap: 32px;
  background-color: #f5f5f5;
  padding: 32px;
  width: 1440px;
`;

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background-color: #e6e6fa;
  padding: 32px;
  border-radius: 8px;
  width: 400px;
  width: 600px;
`;

const MainImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 440px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  &.prev {
    left: 8px;
  }

  &.next {
    right: 8px;
  }
`;

const ThumbnailsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const Thumbnail = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  background-color: #fff;

  &.active {
    border-color: #c92071;
  }
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardsWrapper = styled.div`
  width: 1440px;
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 32px;
`;

const ImageGallery = () => {
  const images = [card, card, card, card];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Container>
        <GalleryContainer>
          <MainImageWrapper>
            <ArrowButton className="prev" onClick={handlePrev}>
              ❮
            </ArrowButton>
            <MainImage
              src={images[activeIndex]}
              alt={`Imagem ${activeIndex + 1}`}
            />
            <ArrowButton className="next" onClick={handleNext}>
              ❯
            </ArrowButton>
          </MainImageWrapper>
          <ThumbnailsWrapper>
            {images.map((image, index) => (
              <Thumbnail
                key={index}
                className={index === activeIndex ? "active" : ""}
                onClick={() => setActiveIndex(index)}
              >
                <ThumbnailImage src={image} alt={`Miniatura ${index + 1}`} />
              </Thumbnail>
            ))}
          </ThumbnailsWrapper>
        </GalleryContainer>
        <BuyBox />
      </Container>

      <CardsWrapper>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsWrapper>
    </>
  );
};

export default ImageGallery;
