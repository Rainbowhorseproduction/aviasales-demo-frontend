import React from "react";
import styled from "styled-components";
import Button from "./Button.js";
import MobileCard from "./MobileCard.js";
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
  padding: 1px 6px 24px;
  display: flex;
  flex-wrap: wrap;
`;

const ColTitle = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  font-size: 12px;
  color: #4a4a4a;
  margin: 0px;
  margin-bottom: 16px;
`;

const Col = styled.div`
  width: 50%;
  margin-top: 31px;
  padding-bottom: 8px;
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

const PartnerInfo = styled.div`
  padding-top: 24px;
`;

const FooterLinksList = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  padding-top: 16px;
  padding-bottom: 12px;
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
`;

const MobileStores = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Store = styled.img`
  margin-bottom: 8px;
`;

const FooterCopy = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  color: #5b5b5c;
  margin: 0;
  margin: 24px 0px;
  text-align: center;
`;

export default function(props) {
  return (
    <Footer>
      <Col>
        <ColTitle>СТРАНЫ</ColTitle>
        <Line>Россия</Line>
        <Line>Тайланд</Line>
        <Line>Черногория</Line>
        <Line>Кипр</Line>
        <Line>Болгария</Line>
        <Line>Грузия</Line>
        <Button>Все страны</Button>
      </Col>
      <Col>
        <ColTitle>ГОРОДА</ColTitle>
        <Line>Москва</Line>
        <Line>Санкт-Петербург</Line>
        <Line>Симферополь</Line>
        <Line>Адлер</Line>
        <Line>Екатеринбург</Line>
        <Line>Лондон</Line>
        <Button>Все городр</Button>
      </Col>
      <Col>
        <ColTitle>АВИАКОМПАНИИ</ColTitle>
        <Line>Air Berlin</Line>
        <Line>Air France</Line>
        <Line>Alitalia</Line>
        <Line>Air Baltic</Line>
        <Line>Emirates</Line>
        <Line>KLM</Line>
        <Button>Все авиакомпании</Button>
      </Col>
      <Col>
        <ColTitle>АЭРОПОРТЫ</ColTitle>
        <Line>Шереметьево</Line>
        <Line>Курумоч</Line>
        <Line>Домодедово</Line>
        <Line>Толмачево</Line>
        <Line>Владивосток</Line>
        <Line>Гамбург</Line>
        <Button>Все аэропорты</Button>
      </Col>
      <Col>
        <ColTitle>НАПРАВЛЕНИЯ</ColTitle>
        <Line>MOW - SIP</Line>
        <Line>MOW - AER</Line>
        <Line>MOW - TIV</Line>
        <Line>MOW - MRV</Line>
        <Line>LED - MOW</Line>
        <Line>MOW - BKK</Line>
      </Col>
      <Col>
        <ColTitle>СЕРВИСЫ</ColTitle>
        <Line>Горящие авиабилеты</Line>
        <Line>Календарь низких цен</Line>
        <Line>Карта низких цен</Line>
        <Line>Спецпредложения</Line>
        <Line>Таблица цен</Line>
        <Line>Блог</Line>
        <Line>Помощь</Line>
      </Col>
      <Delimiter />
      <PartnerInfo>
        <span>
          <About>О компании</About>
          <About>Партнёрская программа</About>
          <br />
          <About>Реклама</About>
          <About>Вакансии</About>
          <About>Помощь</About>
          <About>Правила</About>
          <br />
          <About>White Label авиабилеты</About>
        </span>
      </PartnerInfo>
      <FooterLinksList>
        <MobileCard oslink={vk} name={"Вконтакте"} />
        <MobileCard oslink={facebook} name={"Фейсбук"} />
        <MobileCard oslink={instagram} name={"Инстаграм"} />
        <MobileCard oslink={twitter} name={"Твиттер"} />
        <MobileCard oslink={viber} name={"Вайбер"} />
      </FooterLinksList>
      <EndBlock>
        <HotelLookLink>Поиск и бронирование отелей</HotelLookLink>
        <MobileStores>
          <Store src={appstore} atl="appstore" />
          <Store src={googleplay} atl="googleplay" />
          <Store src={windowsstore} atl="windowsstore" />
        </MobileStores>
        <FooterCopy>© 2007-2018, Aviasales - дешевые авиабилеты</FooterCopy>
      </EndBlock>
    </Footer>
  );
}
