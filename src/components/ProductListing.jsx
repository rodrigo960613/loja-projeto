import React from "react";
import styled from "styled-components";
import Card from "./Card";

const ProdutosContainer = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  h4 {
    font-weight: bold;
    color: #474747;
    position: absolute;
    left: 105px;
    top: -50px;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
`;

const ProductListing = () => {
  return (
    <ProdutosContainer>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </ProdutosContainer>
    
  );
};

export default ProductListing;
