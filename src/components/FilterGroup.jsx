import React from "react";
import styled from "styled-components";
import ProductListing from "./ProductListing";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 1440px;
  padding: 45px;
  gap: 10px;
`;

const ContainerSidebar = styled.div`
  padding: 30px;
  width: 308px;
  height: 100%; 
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  h3 {
    font-size: 16px;
    color: #474747;
    margin-bottom: 8px;
  }

  hr {
    border: none;
    border-top: 1px solid #cccccc;
    margin: 8px 0;
  }

  .selecionar-ordem {
    width: 100%;
    padding: 8px;
    margin-bottom: 20px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .grupo-filtro {
    margin-bottom: 20px;

    h4 {
      font-size: 14px;
      color: #474747;
      margin-bottom: 8px;
    }

    .container-opcao {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }

    input {
      width: 22px;
      height: 22px;
      margin-right: 8px;
      accent-color: #c92071;
    }

    label {
      font-size: 14px;
      color: #474747;
    }
  }
`;

const FilterGroup = () => {
  const filtros = [
    {
      titulo: "Marca",
      tipoInput: "checkbox",
      opcoes: [
        { texto: "Adiddas" },
        { texto: "Calenciaga" },
        { texto: "K-Swiss" },
        { texto: "Nike" },
        { texto: "Puma" },
      ],
    },
    {
      titulo: "Categoria",
      tipoInput: "checkbox",
      opcoes: [
        { texto: "Esporte e lazer" },
        { texto: "Casual" },
        { texto: "Utilitário" },
        { texto: "Corrida" },
      ],
    },
    {
      titulo: "Gênero",
      tipoInput: "checkbox",
      opcoes: [
        { texto: "Masculino" },
        { texto: "Feminino" },
        { texto: "Unisex" },
      ],
    },
    {
      titulo: "Estado",
      tipoInput: "checkbox",
      opcoes: [{ texto: "Novo" }, { texto: "Usado" }],
    },
  ];

  return (
    <Container>
      <ContainerSidebar>
        <h3>Ordenar por</h3>
        <select className="selecionar-ordem">
          <option>Preço: Mais barato</option>
          <option>Preço: Mais caro</option>
          <option>Mais vendidos</option>
          <option>Melhor avaliação</option>
        </select>

        <h3>Filtrar por</h3>
        <hr />
        {filtros.map((filtro, index) => (
          <div className="grupo-filtro" key={index}>
            <h4>{filtro.titulo}</h4>
            <hr />
            {filtro.opcoes.map((opcao, idx) => (
              <div className="container-opcao" key={idx}>
                <input
                  type={filtro.tipoInput}
                  value={opcao.value || opcao.texto}
                  name={filtro.titulo.toLowerCase()}
                />
                <label>{opcao.texto}</label>
              </div>
            ))}
          </div>
        ))}
      </ContainerSidebar>

      <ProductListing />
    </Container>
  );
};

export default FilterGroup;
