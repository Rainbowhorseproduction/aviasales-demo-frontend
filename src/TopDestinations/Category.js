import React from "react";
import styled from "styled-components";
import categoryIconBack from "./categoryIconBack.svg";

const Category = styled.div`
  cursor: pointer;
  width: 64px;
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid #00ace2;
  }
`;

const IconContainer = styled.div`
  position: relative;
  text-align: center;
  margin-top: 32px;
`;

const CategoryIconBack = styled.img``;

const CategoryIcon = styled.img`
  position: absolute;
  width: 22px;
  height: 22px;
  left: calc(50% - 11px);
  top: calc(50% - 13px);
`;

const CategoryLabel = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  color: #5c5c5c;
  margin-top: 12px;
  margin-bottom: 2px;
`;

export default function(props) {
  return (
    <Category>
      <IconContainer>
        <CategoryIconBack src={categoryIconBack} alt="icon back" />
        <CategoryIcon src={props.icon} alt="icon" />
      </IconContainer>
      <CategoryLabel>{props.label}</CategoryLabel>
    </Category>
  );
}
