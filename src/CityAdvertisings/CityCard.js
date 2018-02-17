import React from "react";
import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  @media (min-width: 1440px) {
    width: 50%;
    padding-right: 7px;
    padding-left: 7px;
  }
`;

const CityCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  border-radius: 8px;
  margin-top: 12px;
  margin-left: 6px;
  margin-right: 6px;

  @media (min-width: 768px) {
    margin-top: 23px;
    margin-left: 72px;
    margin-right: 72px;
  }
  @media (min-width: 1440px) {
    margin: 0;
    margin-top: 31px;
  }
`;

const ProductDescription = styled.div``;

const CityView = styled.img`
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DirectionInfo = styled.div`
  margin-left: 16px;
  margin-top: 16px;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 25px;
    margin-top: 12px;
    margin-bottom: 16px;
  }
`;

const Flag = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    margin-right: 16px;
  }
`;

const CityAndCountry = styled.div``;

const CityName = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 20px;
  font-size: 16px;
  color: #5b5b5c;
  margin: 0;
  margin-bottom: 4px;

  @media (min-width: 768px) {
    margin-bottom: 2px;
    line-height: 32px;
    font-size: 22px;
  }
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
  margin-top: 18px;

  @media (min-width: 768px) {
    margin-right: 16px;
    margin-top: 12px;
  }
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

  @media (min-width: 768px) {
    margin-bottom: 2px;
    line-height: 32px;
    font-size: 22px;
  }
`;

const DateAndMonth = styled.p`
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
    <Container>
      <CityCard>
        <CityView src={props.picture} alt="townImage" />
        <MainInfo>
          <ProductDescription>
            <DirectionInfo>
              <Flag src={props.flag} alt="flag" />
              <CityAndCountry>
                <CityName>{props.city}</CityName>
                <Country>{props.country}</Country>
              </CityAndCountry>
            </DirectionInfo>
          </ProductDescription>
          <ProductDescription>
            <DateInfo>
              <Price>Найти от {props.price.toLocaleString()}₽</Price>
              <DateAndMonth>{props.dateMonth}</DateAndMonth>
            </DateInfo>
          </ProductDescription>
        </MainInfo>
      </CityCard>
    </Container>
  );
}
