import React from "react";
import styled from "styled-components";

const CityCard = styled.div`
  padding: 0px 6px 12px 6px;
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  border-radius: 8px;
`;

const Col = styled.div`
  width: 50%;
`;

const CityView = styled.img`
  width: 100%;
`;

const MainInfo = styled.div`
  display: flex;
`;

const DirectionInfo = styled.div`
  margin-left: 16px;
  margin-top: 8px;
`;

const CityName = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 20px;
  font-size: 16px;
  color: #5b5b5c;
  margin: 0;
  margin-bottom: 4px;
`;

const Country = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  color: #a0b0b9;
  margin: 0;
`;

const DateInfo = styled.div`
  margin-right: 16px;
  margin-top: 5px;
`;

const Price = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 14px;
  text-align: right;
  color: #00bae8;
  margin: 0;
  margin-bottom: 4px;
`;

const Date = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  text-align: right;
  color: #a0b0b9;
  margin: 0;
`;

export default function(props) {
  return (
    <CityCard>
      <CityView src={props.picture} alt="townImage" />
      <MainInfo>
        <Col>
          <DirectionInfo>
            <CityName>{props.city}</CityName>
            <Country>{props.country}</Country>
          </DirectionInfo>
        </Col>
        <Col>
          <DateInfo>
            <Price>Найти от {props.price.toLocaleString()}₽</Price>
            <Date>{props.date}</Date>
          </DateInfo>
        </Col>
      </MainInfo>
    </CityCard>
  );
}
