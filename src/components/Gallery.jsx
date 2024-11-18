import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import teniseditado from "../assets/teniseditado.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const GalleryContainer = styled.div`

  width: 1440px;
  height: 681px;
  background-color: #f5f5f5;

  .carousel-indicators button {
    background-color: #cccccc;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    transition: background-color 0.5s ease;
  }

  .carousel-indicators .active {
    background-color: #c92071;
  }

  .carousel-indicators button:hover {
    background-color: #c92071;
  }

  .carousel-caption {
    position: absolute;
    top: 50%;
    left: 50px;
    transform: translateY(-50%);
    font-size: 16px;
    font-weight: bold;
    width: 30%;
    text-align: left;
  }

  .carousel-caption h6 {
    color: #f6aa1c;
  }

  .carousel-caption h1 {
    font-size: 50px;
    color: #1f1f1f;
    margin-bottom: 10px;
  }

  .carousel-caption p {
    color: #474747;
  }

  .carousel-caption button {
    width: 220px;
    height: 48px;
    background-color: #c92071;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 20px;
  }

  .carousel-caption button:hover {
    background-color: #a1185b;
  }
`;

const Gallery = () => {
  return (
    <>
    <GalleryContainer>
      
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={teniseditado} className="d-block w-100" alt="Slide 1" />
              <div className="carousel-caption">
                <h6>Melhores ofertas personalizadas</h6>
                <h1>Queima de estoque Nike 🔥</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolorum architecto, harum.
                </p>
               <Link to="/produtos"> <button>Ver Ofertas</button></Link>
              </div>
            </div>
            <div className="carousel-item">
              <img src={teniseditado} className="d-block w-100" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src={teniseditado} className="d-block w-100" alt="Slide 3" />
            </div>
          </div>
        </div>
      
    </GalleryContainer>
    </>
  );
};

export default Gallery;
