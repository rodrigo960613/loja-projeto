import Logo from "./Logo";
import miniCart from "../assets/miniCart.svg";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  width: 1440px;
  height: 192px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
  }

  input {
    width: 559px;
    height: 60px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.8);
    color: #000;
  }

  a {
    width: 102px;
    height: 28px;
    color: #474747;
    font-weight: bold;
    font-size: 16px;
    text-underline-offset: 5px;

    &:hover {
      color: #c92071;
    }
  }

  .minicart {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  button {
    width: 114px;
    height: 40px;
    background-color: #c92071;
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    border: none;

    &:hover {
      background-color: #9a165b;
    }
  }

  nav {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding-top: 20px;
  }

  nav ul {
    display: flex;
    list-style: none;
    gap: 35px;
  }

  nav a {
    color: #474747;
    font-size: 16px;
    font-weight: bold;
    text-decoration: underline;
    text-underline-offset: 5px;
    transition: color 0.4s ease;

    &:hover {
      color: #c92071;
    }
  }
`;

const Header = () => {
  return (
    <>
    <HeaderContainer>
      <div>
        <Logo />
        <input type="search" placeholder="Pesquisar Produto..." />
        <a href="">Cadastre-se</a>
        <button>Entrar</button>
        <img className="minicart" src={miniCart} alt="Mini Cart" />
      </div>

      <nav>
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/produtos">Produtos</Link>
          </li>
          <li>
          <Link to="/categoria">Categoria</Link>
          </li>
          <li>
          <Link to="/pedidos">Meus Pedidos</Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
    </>
  );
};

export default Header;
