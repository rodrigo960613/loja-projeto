import React from "react";
import styled from "styled-components";
import colecao1 from "../assets/colecao1.png";
import colecao2 from "../assets/colecao2.png";
import colecao3 from "../assets/colecao3.png";
import camiseta from "../assets/camiseta.png";
import calca from "../assets/calca.png";
import bone from "../assets/bone.png";
import fone from "../assets/fone.png";
import tenis from "../assets/tenis.png";
import ProductListing from "../components/ProductListing";

const SectionContainer = styled.div`
  width: 1440px;
  margin-top: 50px;

  .section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    position: relative;
  }

  .section h3 {
    font-weight: bold;
    padding-left: 95px;
    color: #474747;
    font-weight: bold;
    position: absolute;
    left: 0px;
    top: -20px;
  }

  .section-imagens {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    gap: 20px;
  }

  .imagem-container {
    position: relative;
  }

  .section img {
    height: auto;
    border-radius: 10px;
  }

  .button-comprar {
    width: 153px;
    height: 48px;
    position: absolute;
    bottom: 20px;
    left: 25%;
    transform: translateX(-50%);
    background-color: #c92071;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .button-comprar:hover {
    background-color: #9a165b;
  }

  
  .section2 {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }

  .section2 h3 {
    font-weight: bold;
    color: #474747;
  }

  .section2-images {
    display: flex;
    justify-content: center;
    gap: 80px;
  }

  .section2 .imagem-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: contain;
    transition: all 0.5s ease-in-out;
    filter: brightness(0) saturate(100%) invert(51%) sepia(3%) saturate(13%)
      hue-rotate(315deg) brightness(93%) contrast(88%);
    border-radius: 50%;
  }

  .section2 .imagem-container:hover {
    background-size: contain;
    transition: all 0.5s ease-in-out;
    filter: brightness(0) saturate(100%) invert(19%) sepia(91%) saturate(3170%)
      hue-rotate(322deg) brightness(98%) contrast(96%);
  }

  .fundo {
    margin-top: 20px;
  }

  .section2 img {
    width: 80px;
    height: 80px;
    cursor: pointer;
  }

  .section2 p {
    margin-top: 10px;
    font-size: 16px;
    cursor: pointer;
    font-weight: bold;
    color: #474747;
  }

  .lista {
    color: #474747;
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
    padding-left: 105px;
    color: #474747;
    margin-top:50px;
    margin-bottom: 20px;
  }
`;

const Section = () => {
  return (
    <>
      <SectionContainer>
        <div className="section">
          <h3>Coleção em destaque</h3>
          <div className="section-imagens">
            <div className="imagem-container">
              <img src={colecao1} alt="Coleção 1" />
              <button className="button-comprar">Comprar</button>
            </div>
            <div className="imagem-container">
              <img src={colecao2} alt="Coleção 2" />
              <button className="button-comprar">Comprar</button>
            </div>
            <div className="imagem-container">
              <img src={colecao3} alt="Coleção 3" />
              <button className="button-comprar">Comprar</button>
            </div>
          </div>
        </div>

        <div className="section2">
          <h3>Coleção em destaque</h3>
          <div className="section2-images">
            <div className="imagem-container">
              <div className="fundo">
                <img src={camiseta} alt="Camisetas" />
              </div>
              <p>Camisetas</p>
            </div>

            <div className="imagem-container">
              <div className="fundo">
                <img src={calca} alt="Calça" />
              </div>
              <p>Calça</p>
            </div>

            <div className="imagem-container">
              <div className="fundo">
                <img src={bone} alt="Boné" />
              </div>
              <p>Boné</p>
            </div>

            <div className="imagem-container">
              <div className="fundo">
                <img src={fone} alt="Fone" />
              </div>
              <p>Fone</p>
            </div>

            <div className="imagem-container">
              <div className="fundo">
                <img src={tenis} alt="Tênis" />
              </div>
              <p>Tênis</p>
            </div>
          </div>
        </div>
        <h3 className="lista">Produtos em destaque</h3>
      </SectionContainer>
      <ProductListing />
    </>
  );
};

export default Section;
