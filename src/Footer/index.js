import React from "react";
import styled from "styled-components";
import Card from "./Card";
import vk from "./vk.svg";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";
import viber from "./viber.svg";
import appstore from "./appstore.svg";
import googleplay from "./googleplay.svg";
import windowsstore from "./windowsstore.svg";

const Footer = styled.div`
  background: #ffffff;
  padding: 1px 0px 24px;

  @media (min-width: 768px) {
    padding: 1px 0px 24px 11px;
  }

  @media (min-width: 768px) {
    padding: 14px 0px 24px;
  }
`;

const Services = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 6px;
  padding-right: 6px;

  @media (min-width: 768px) {
    padding-left: 98px;
    padding-right: 98px;
  }
`;

const Title = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  font-size: 12px;
  color: #4a4a4a;
  margin: 0px;
  margin-bottom: 16px;
`;

const FaQ = styled.div`
  width: 50%;
  margin-top: 31px;
  padding-bottom: 8px;

  @media (min-width: 768px) {
    width: 25%;
  }

  @media (min-width: 1440px) {
    width: 16.666%;
    padding-bottom: 28px;
  }
`;

const Line = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  color: #5b5b5c;
  margin: 0;
  margin-bottom: 12px;
`;

const Delimiter = styled.div`
  width: 100%;
  border-top: 1px solid #e0e6e8;
`;

const BottomBlock = styled.div`
  padding-top: 24px;
  padding-left: 6px;
  padding-right: 6px;

  @media (min-width: 768px) {
    padding-left: 98px;
    padding-right: 98px;
  }

  @media (min-width: 1440px) {
    padding-top: 40px;
    display: flex;
    justify-content: space-between;
  }
`;

const PartnerInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LinksList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  padding: 0;
  margin-top: 16px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    padding-left: 0px;
    margin-top: 17px;
    margin-bottom: 32px;
  }

  @media (min-width: 1440px) {
  }
`;

const About = styled.p`
  display: inline-block;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  color: #5b5b5c;
  margin: 0;
  margin-right: 14px;
  margin-bottom: 8px;
`;

const EndBlock = styled.div``;

const HotelLookLink = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  text-align: center;
  color: #5b5b5c;
  margin: 0;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Stores = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1440px) {
  }
`;

const Store = styled.img`
  margin-bottom: 8px;

  @media (min-width: 768px) {
    margin-right: 10px;
  }
`;

const Copyright = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  color: #5b5b5c;
  margin: 0;
  margin: 24px 0px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

  @media (min-width: 1440px) {
    text-align: right;
  }
`;

const Button = styled.button`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  font-size: 12px;
  color: #4a4a4a;
  border: none;
  background: none;
  cursor: pointer;
  margin-top: 4px;
  padding: 0;
`;

export default function(props) {
  return (
    <Footer>
      <Services>
        <FaQ>
          <Title>СТРАНЫ</Title>
          <Line>Россия</Line>
          <Line>Тайланд</Line>
          <Line>Черногория</Line>
          <Line>Кипр</Line>
          <Line>Болгария</Line>
          <Line>Грузия</Line>
          <Button>Все страны →</Button>
        </FaQ>
        <FaQ>
          <Title>ГОРОДА</Title>
          <Line>Москва</Line>
          <Line>Санкт-Петербург</Line>
          <Line>Симферополь</Line>
          <Line>Адлер</Line>
          <Line>Екатеринбург</Line>
          <Line>Лондон</Line>
          <Button>Все города →</Button>
        </FaQ>
        <FaQ>
          <Title>АВИАКОМПАНИИ</Title>
          <Line>Air Berlin</Line>
          <Line>Air France</Line>
          <Line>Alitalia</Line>
          <Line>Air Baltic</Line>
          <Line>Emirates</Line>
          <Line>KLM</Line>
          <Button>Все авиакомпании →</Button>
        </FaQ>
        <FaQ>
          <Title>АЭРОПОРТЫ</Title>
          <Line>Шереметьево</Line>
          <Line>Курумоч</Line>
          <Line>Домодедово</Line>
          <Line>Толмачево</Line>
          <Line>Владивосток</Line>
          <Line>Гамбург</Line>
          <Button>Все аэропорты →</Button>
        </FaQ>
        <FaQ>
          <Title>НАПРАВЛЕНИЯ</Title>
          <Line>MOW - SIP</Line>
          <Line>MOW - AER</Line>
          <Line>MOW - TIV</Line>
          <Line>MOW - MRV</Line>
          <Line>LED - MOW</Line>
          <Line>MOW - BKK</Line>
        </FaQ>
        <FaQ>
          <Title>СЕРВИСЫ</Title>
          <Line>Горящие авиабилеты</Line>
          <Line>Календарь низких цен</Line>
          <Line>Карта низких цен</Line>
          <Line>Спецпредложения</Line>
          <Line>Таблица цен</Line>
          <Line>Блог</Line>
          <Line>Помощь</Line>
        </FaQ>
      </Services>
      <Delimiter />
      <BottomBlock>
        <div>
          <PartnerInfo>
            <About>О компании</About>
            <About>Партнёрская программа</About>
            <About>Реклама</About>
            <About>Вакансии</About>
            <About>Помощь</About>
            <About>Правила</About>
            <About>White Label авиабилеты</About>
          </PartnerInfo>
          <LinksList>
            <Card oslink={vk} name={"Вконтакте"} />
            <Card oslink={facebook} name={"Фейсбук"} />
            <Card oslink={instagram} name={"Инстаграм"} />
            <Card oslink={twitter} name={"Твиттер"} />
            <Card oslink={viber} name={"Вайбер"} />
          </LinksList>
          <HotelLookLink>Поиск и бронирование отелей</HotelLookLink>
        </div>
        <EndBlock>
          <Stores>
            <Store src={appstore} atl="appstore" />
            <Store src={googleplay} atl="googleplay" />
            <Store src={windowsstore} atl="windowsstore" />
          </Stores>
          <Copyright>© 2007-2018, Aviasales - дешевые авиабилеты</Copyright>
        </EndBlock>
      </BottomBlock>
    </Footer>
  );
}
