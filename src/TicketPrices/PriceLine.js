import React from "react";
import styled from "styled-components";

const PriceLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Name = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  color: #4a4a4a;
  margin: 0;
  cursor: pointer;
`;

const Price = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  color: #00bae8;
  margin: 0;
  cursor: pointer;
`;

export default props => (
  <PriceLine>
    <Name>{props.name}</Name>
    <Price>от {props.price.toLocaleString()} ₽</Price>
  </PriceLine>
);
