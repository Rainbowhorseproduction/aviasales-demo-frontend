import React from "react";
import styled from "styled-components";
import TicketCard from "./TicketCard";
import pobeda from "./pobeda.svg";
import circle from "./circle.svg";
import lufthansa from "./lufthansa.svg";

const SpecialOffers = styled.div`
  background: linear-gradient(162.96deg, #00b0de 41.41%, #196ebd 141.41%);
  padding: 16px 6px;

  @media (min-width: 768px) {
    padding: 24px 0px;
  }
  @media (min-width: 1440px) {
    padding: 24px 169px;
  }
`;

const Cards = styled.div`
  @media (min-width: 768px) {
    display: flex;
    box-sizing: border-box;
  }
`;

const TitleMain = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 28px;
  color: #ffffff;
  margin: 0;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 20px;
    padding-left: 8px;
    line-height: 42px;
    font-size: 30px;
  }

  @media (min-width: 1440px) {
    padding-left: 34px;
  }
`;

const TitleBottom = styled.div`
  margin-top: 32px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    padding: 0px 8px;
  }
  @media (min-width: 1440px) {
    padding-left: 34px;
    padding-right: 34px;
    padding-bottom: 24px;
    margin-top: 16px;
  }
`;

const AllOffers = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  text-decoration-line: underline;
  color: #ffffff;
  cursor: pointer;
  margin: 0;
`;

const OfferDetails = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  margin: 0;
  margin-top: 8px;
  padding-bottom: 8px;

  @media (min-width: 768px) {
    margin: 0px;
    padding-bottom: 0px;
  }
`;

export default function() {
  return (
    <SpecialOffers>
      <TitleMain>Спецпредложения на авиабилеты</TitleMain>
      <Cards>
        <TicketCard
          text={"Билеты от 499 рублей!"}
          alianceLogo={""}
          logo={pobeda}
          price={499}
          timeLeft={"Осталось 45 дней"}
          offer={
            <span>
              Билеты от 499 рублей!<br /> Специальное предложение от
              авиакомпании Победа
            </span>
          }
          details={"Узнать подробности"}
        />
        <TicketCard
          text={"В Нью-Йорк от 20 680 ₽!"}
          alianceLogo={circle}
          logo={lufthansa}
          price={20680}
          timeLeft={"Осталось 19 дней"}
          offer={
            "Из Москвы в США от 20 680 рублей! Специальное предложение от авиакомпании Lufthansa"
          }
          details={"Узнать подробности"}
        />
        <TicketCard
          text={"В Лос-Анджелес от!"}
          alianceLogo={circle}
          logo={lufthansa}
          price={20360}
          timeLeft={"Осталось 19 дней"}
          offer={
            "Из Москвы в США от 20 360 рублей! Специальное предложение от авиакомпании Lufthansa"
          }
          details={"Узнать подробности"}
        />
      </Cards>
      <TitleBottom>
        <AllOffers>Смотреть все спецпредложения</AllOffers>
        <OfferDetails>* средняя цена по направлению</OfferDetails>
      </TitleBottom>
    </SpecialOffers>
  );
}
