import React from "react";
import styled from "styled-components";

const CityCard = styled.div`
  text-align: left;
  padding: 24px 0px;
`;

const TitleBlock = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const Flag = styled.img`
  width: 42px;
  height: 42px;
  margin-left: -6px;
`;

const Name = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 32px;
  font-size: 22px;
  color: #5b5b5c;
  margin: 0;
  coursor: pointer;
`;

const Country = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  color: #a0b0b9;
  margin-top: 2px;
  margin-botttom: 0px;
`;

export default function(props) {
  return (
    <CityCard>
      <TitleBlock>
        <Flag src={props.flag} alt="flag" />
        <div>
          <Name>{props.city}</Name>
          <Country>{props.country}</Country>
        </div>
      </TitleBlock>
      {props.children}
    </CityCard>
  );
}
