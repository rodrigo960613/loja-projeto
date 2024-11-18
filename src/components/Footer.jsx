import styled from "styled-components";
import logoFooter from "../assets/logoFooter.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";

const FooterContainer = styled.footer`
  
  width: 1440px;
  height: 404px;
  background-color: #1f1f1f;
  color: #ffffff;
  margin-top: 50px;
  

  .footer-content {
    width: 100%;
    display: flex;
    justify-content: space-around;
    gap:50px;
    flex-wrap: wrap;
    padding-top: 80px;
    
  }

  .logo-section {
    
    width: 250px;

    img {
      margin-bottom: 30px;
    }

    p {
      font-size: 16px;
    }

    .social-links {
      display: flex;
      gap: 30px;
      margin-top: 30px;
    }
  }

  .footer-section,
  .contact-info {
    
    width: 195px;

    h4 {
      font-size: 19px;
      margin-bottom: 16px;
      color: #ddd;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      margin-bottom: 8px;
    }

    a {
      color: #ffffff;
      text-decoration: none;
    }

    .contact-info p {
      font-size: 8px;
    }
  }

  .footer-bottom {
    text-align: center;
    border-top: 1px solid #555;
    padding-top: 10px;
    margin-top: 40px;

    p {
      margin: 0;
      color: #ffffff;
    }
  }
`;

const Footer = () => {
  const informacao = [
    { text: "Sobre Drip Store", link: "/sobre Drip Store" },
    { text: "Segurança", link: "/segurança" },
    { text: "Wishlist", link: "/wishlist" },
    { text: "Blog", link: "/blog" },
    { text: "Trabalhe conosco", link: "/trabalhe conosco" },
    { text: "Meus Pedidos", link: "/meus Pedidos" },
  ];

  const categoria = [
    { text: "Camisetas", link: "/categoria/camisetas" },
    { text: "Calças", link: "/categoria/calcas" },
    { text: "Bonés", link: "/categoria/bones" },
    { text: "Headphones", link: "/categoria/headphones" },
    { text: "Tênis", link: "/categorias/tenis" },
  ];

  const contato = {
    endereco:
      "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161",
    telefone: "(85) 3051-3411",
  };

  return (
    <>
    <FooterContainer>
      <div className="footer-content">
        <div className="logo-section">
          <img src={logoFooter} alt="Drip Store Logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex at
            magnam impedit ea quas quia.
          </p>
          <div className="social-links">
            <a href="#">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="#">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="#">
              <img src={twitter} alt="Twitter" />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Informações</h4>
          <ul>
            {informacao.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4>Categoria</h4>
          <ul>
            {categoria.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="contact-info">
          <h4>Contato</h4>
          <p>{contato.endereco}</p>
          <p>{contato.telefone}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>@ 2024 Digital College</p>
      </div>
    </FooterContainer>
    </>
  );
};

export default Footer;
