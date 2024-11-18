import styled from "styled-components";
import tenisfim from "../assets/tenisfim.png";
import { Link } from "react-router-dom";

const ArtigoContainer = styled.div`
  width: 1440px;
  margin-top: 100px;

  .artigo {
    width: 100%;
    display: flex;
    gap: 120px;
    justify-content: center;
    align-items: center;
  }

  .fundo-img {
    background-color: #f5f5f5;
    border-radius: 50%;
    width: 470px;
    height: 470px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fundo-img img {
    width: 557px; 
    height: 330px;
  }

  h6 {
    color: #c92071;
  }

  h1 {
    color: #474747;
    font-weight: bold;
    margin-top: 20px;
  }

  p {
    color: #474747;
    margin-top: 20px;
  }

  button {
    background-color: #c92071;
    color: #ffffff;
    border-radius: 10px;
    border: none;
    width: 200px;
    height: 40px;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
      background-color: #a1185b;
    }
  }
`;


const Oferta = () => {
  return (
    <>
    <ArtigoContainer>
      <div className="artigo">
        <div className="fundo-img">
          <img src={tenisfim} alt="" />
        </div>
        <div>
          <h6>Oferta especial</h6>
          <h1>
            Air Jordan edição de <br /> colecionador
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Dicta, ullam quae aperiam, accusamus minus officiis quaerat sed, aut
            non <br />
            velit at labore sunt possimus pariatur officia quo? <br /> Deserunt,
            est labore!
          </p>
          <Link to="/produtos"><button>Ver Oferta</button></Link>
        </div>
      </div>
    </ArtigoContainer>
    </>
  );
};

export default Oferta;
