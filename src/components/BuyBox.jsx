import React, { useState } from "react";
import styled from "styled-components";
import starIcon from "../assets/starIcon.svg";

const StyledBuyBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 30%;
  padding: 16px;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  box-sizing: border-box;

  h1 {
    font-size: 32px;
    color: #474747;
  }

  p {
    margin: 0;

    &.reference {
      font-size: 12px;
      color: #a3a3a3;
    }

    &.description {
      font-size: 14px;
      color: #474747;
    }
  }

  .stars-container {
    display: flex;
    align-items: center;
    gap: 8px;

    .star-badge {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px 8px;
      border-radius: 4px;
      background-color: #ffc107;
      font-size: 14px;
      color: #fff;

      img {
        width: 16px;
        height: 16px;
      }
    }

    .rating {
      font-size: 14px;
      color: #c3c3c3;
    }
  }

  .price-container {
    display: flex;
    align-items: baseline;
    gap: 8px;

    .price-original {
      font-size: 16px;
      color: #c3c3c3;
      text-decoration: line-through;
    }

    .price-discount,
    .price {
      font-size: 32px;
      color: #474747;
    }
  }

  .options-container {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .option-group {
      display: flex;
      flex-direction: column;
      gap: 4px;

      label {
        font-size: 14px;
        font-weight: bold;
        color: #474747;
      }

      .option-group__values {
        display: flex;
        gap: 10px;

        .option {
          display: flex;
          align-items: center;
          padding: 8px;
          border: 1px solid #e6e6e6;
          border-radius: 4px;
          cursor: pointer;
          background-color: #ffffff;
          color: #474747;

          &:hover {
            background-color: #c92071;
            color: #ffffff;
          }

          &.selected {
            background-color: #c92071;
            color: #ffffff;

            label {
              color: #ffffff;
            }
          }

          label {
            font-size: 14px;
            &:hover{
                color: #ffffff;
            }
          }
        }
      }
    }
  }

  button {
    padding: 12px 16px;
    font-size: 16px;
    color: #fff;
    background-color: #ffc107;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #e0a800;
    }
  }
`;

const BuyBox = ({
  name = "Tênis Nike Revolution 6 Next Nature Masculino",
  reference = "Casual | Nike | REF:38416711",
  stars = 4.7,
  rating = 90,
  price = "299,90",
  priceDiscount = "219,90",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  options = [
    { title: "Tamanhos", values: ["38", "39", "40", "41"] },
    { title: "Cores", values: ["Preto", "Branco", "Azul"] },
  ],
}) => {
  const [selectedOption, setSelectedOption] = useState({ size: null, color: null });

  const handleOptionClick = (type, value) => {
    setSelectedOption((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  return (
    <StyledBuyBox>
      <h1>{name}</h1>
      <p className="reference">Referência: {reference}</p>
      <div className="stars-container">
        <div className="star-badge">
          {stars.toFixed(1)}
          <img src={starIcon} alt="Ícone de Estrela" />
        </div>
        <span className="rating">{rating} avaliações</span>
      </div>
      <div className="price-container">
        {priceDiscount ? (
          <>
            <span className="price-original">R$ {price}</span>
            <span className="price-discount">R$ {priceDiscount}</span>
          </>
        ) : (
          <span className="price">R$ {price}</span>
        )}
      </div>
      <p className="description">{description}</p>
      <div className="options-container">
        {options.map((option, index) => (
          <div key={index} className="option-group">
            <label>{option.title}</label>
            <div className="option-group__values">
              {option.values.map((value) => (
                <div
                  key={value}
                  className={`option ${selectedOption[option.title.toLowerCase()] === value ? "selected" : ""}`}
                  onClick={() => handleOptionClick(option.title.toLowerCase(), value)}
                >
                  <label>{value}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button>Comprar</button>
    </StyledBuyBox>
  );
};

export default BuyBox;
