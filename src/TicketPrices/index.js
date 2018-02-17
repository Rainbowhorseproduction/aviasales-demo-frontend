import React from "react";
import styled from "styled-components";
import CityCard from "./CityCard";
import PriceLine from "./PriceLine";
import calendar from "./calendar.svg";
import flagRu from "./flagRu.svg";

const Tickets = styled.div`
  background: linear-gradient(180deg, #f8fcff 0%, #ffffff 100%);
  text-align: center;
  padding: 32px 6px 40px 6px;

  @media (min-width: 768px) {
    padding: 32px 72px 60px 72px;
  }
  @media (min-width: 1440px) {
    padding: 32px 203px 75px 203px;
  }
`;

const Calendar = styled.img``;

const Title = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  text-align: center;
  color: #4a4a4a;
  margin-top: 20px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 36px;
    line-height: 36px;
    font-size: 24px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 60px;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;

const PriceComparison = styled.p`
  box-sizing: border-box;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 16px;
  text-align: center;
  color: #4a4a4a;
  margin: 0;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 16px;
    line-height: 26px;
    font-size: 16px;
  }
  @media (min-width: 1440px) {
    margin-top: 77px;
  }
`;

const PriceOffer = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
  text-align: center;
  color: #a0b0b9;
  margin: 0;
`;

const CardDelimiter = styled.div`
  border-bottom: 1px dashed #e4e7e8;

  @media (min-width: 1440px) {
    border-right: 1px dashed #e4e7e8;
    border-bottom: none;
    margin-right: 34px;
    margin-left: 34px;
  }
`;

export default function(props) {
  return (
    <Tickets>
      <Calendar src={calendar} alt="calendar" />
      <Title>Лучшие цены на авиабилеты за последний месяц</Title>
      <Cards>
        <CityCard city={"Симферополь(Крым)"} country={"КРЫМ"} flag={flagRu}>
          <PriceLine name={"Из Москвы"} price={4813} />
          <PriceLine name={"Из Санкт-Перербурга"} price={7857} />
          <PriceLine name={"Из Новосибирска"} price={15127} />
          <PriceLine name={"Из Екатеринбурга"} price={9275} />
          <PriceLine name={"Из Челябинска"} price={9148} />
        </CityCard>
        <CardDelimiter />
        <CityCard city={"Ереван"} country={"Армения"} flag={flagRu}>
          <PriceLine name={"Из Москвы"} price={6758} />
          <PriceLine name={"Из Санкт-Перербурга"} price={9932} />
          <PriceLine name={"Из Сочи"} price={11951} />
          <PriceLine name={"Из Краснодара"} price={11741} />
          <PriceLine name={"Из Ростова-на-Дону"} price={11956} />
        </CityCard>
        <CardDelimiter />
        <CityCard city={"Кишинёв"} country={"Молдавия"} flag={flagRu}>
          <PriceLine name={"Из Москвы"} price={8319} />
          <PriceLine name={"Из Санкт-Перербурга"} price={10800} />
          <PriceLine name={"Из Краснодара"} price={12098} />
          <PriceLine name={"Из Сургута"} price={16277} />
          <PriceLine name={"Из Нового Уренгоя"} price={15987} />
        </CityCard>
      </Cards>
      <PriceComparison>
        Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран
        мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и 728
        авиакомпаний.
      </PriceComparison>
      <PriceOffer>
        Цены, найденные пользователями за последние 48 часов, не являются
        офертой.
      </PriceOffer>
    </Tickets>
  );
}
