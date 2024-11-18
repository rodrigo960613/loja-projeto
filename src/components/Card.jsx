import styled from "styled-components";
import card from "../assets/card.png";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  width: 292px;
  height: 439px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); 
  cursor: pointer;

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .imagem {
    width: 248px;
    height: auto;
  }

  .nome {
    font-size: 20px;
    font-weight: bold;
    color: #474747;
    text-align: left; 
    width: 100%;
  }

  .preco-container {
    display: flex;
    gap: 10px;
    justify-content: flex-start; 
    width: 100%;
  }

  .preco {
    font-size: 24px;
    color: #8F8F8F;
    text-decoration: line-through;
  }

  .desconto {
    font-size: 24px;
    color: #1F1F1F;
    font-weight: bold;
  }

  p {
    width: 100%;
    text-align: left;
    color: #8F8F8F;
  }
`;

const Card = () => {
  const nome = "K-Swiss V8 - Masculino";
  const preco =  "200,00";
  const desconto = "100,00";

  return (
    <CardContainer>
      <div className="container">
       <Link to="/detalhes"><img src={card} alt={nome} className="imagem" /></Link> 
        <p>Tênis</p>
        <div className="nome">{nome}</div>
        <div className="preco-container">
          <div className="preco">{preco}</div>
          <div className="desconto">{desconto}</div>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
