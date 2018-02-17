import React from "react";
import logo from "./logo.png";
import styled from "styled-components";
import arrow from "./arrow.svg";
import calendar from "./calendar.svg";
import dropDownArrow from "./dropDownArrow.svg";
import aero from "./aero.svg";

const Header = styled.header`
  background: linear-gradient(
    126.97deg,
    #00b0de -13.66%,
    #01aedc -9.98%,
    #02abdb -6.26%,
    #02abdb -2.56%,
    #02abdb -2.34%,
    #196ebd 85.88%
  );
  padding: 12px 6px 88px;

  @media (min-width: 768px) {
    padding: 12px 8px 122px;
  }
  @media (min-width: 1440px) {
    padding: 12px 98px 254px 98px;
  }
`;

const Logotype = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Logo = styled.img``;

const Sitename = styled.p`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 25px;
  font-size: 20px;
  color: #ffffff;

  @media (min-width: 768px) {
    margin-left: 12px;
  }
`;

const Title = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  margin-top: 81px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    line-height: 48px;
    font-size: 32px;
    margin-bottom: 8px;
  }
  @media (min-width: 1440px) {
    line-height: 48px;
    font-size: 40px;
    margin-bottom: 8px;
    margin-top: 213px;
  }
`;

const Description = styled.p`
  margin: 0;
  display: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  text-align: center;
  color: #ffffff;

  @media (min-width: 768px) {
    display: block;
    font-size: 20px;
    margin-bottom: 40px;
  }

  @media (min-width: 1440px) {
    display: block;
    font-size: 24px;
    margin-bottom: 40px;
  }
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding-left: 72px;
    padding-right: 72px;
  }
  @media (min-width: 1440px) {
    display: flex;
    padding-left: 107px;
    padding-right: 107px;
  }
`;

const OptionWrapper = styled.div`
  box-sizing: border-box;
  padding: 0px;

  @media (min-width: 768px) {
    width: 50%;
    padding-left: 1px;
    padding-right: 1px;
  }
  @media (min-width: 1440px) {
    width: 25%;
  }
`;

const PointOfDeparture = styled.div`
  box-sizing: border-box;
  display: flex;
  background: #ffffff;
  padding: 18px 16px;
  margin-bottom: 2px;

  @media (min-width: 768px) {
    padding-right: 20px;
  }
`;

const DepartureName = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #4a4a4a;
  margin: 0;
  width: 100%;
  text-align: left;
`;

const Code = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #a0b0b9;
  padding-right: 11px;
  margin: 0;
`;

const Arrow = styled.img``;

const Destination = styled.div`
  box-sizing: border-box;
  padding: 18px 16px;
  background: #ffffff;
  margin-bottom: 2px;

  @media (min-width: 768px) {
  }
`;

const DestinationName = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  color: #a0b0b9;
  text-align: left;
  margin: 0;
`;

const Date = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  color: #a0b0b9;
  margin-bottom: 2px;

  @media (min-width: 768px) {
  }
`;

const DateThere = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px 16px;
  margin-right: 1px;
  background: #ffffff;
  width: 100%;
`;

const There = styled.p`
  margin: 0;
  height: 20px;
`;

const Calendar = styled.img`
  width: 17px;
  height: 20px;
`;

const DateBack = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px 16px;
  margin-left: 1px;
  background: #ffffff;
  width: 100%;
`;

const Back = styled.p`
  margin: 0;
`;

const PassangersClassOptions = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: baseline;
  background: #ffffff;
  margin-bottom: 16px;
  padding: 18px 16px;

  @media (min-width: 768px) {
    margin-bottom: 2px;
  }
`;

const NumberAndClass = styled.div`
  display: flex;
`;

const Number = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  color: #4a4a4a;
  margin: 0;
`;

const Class = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  color: #a0b0b9;
  margin: 0;
`;

const Shape = styled.img``;

const ButtonLine = styled.div`
  display: flex;
  justify-content: space-around;
`;

const FindTicketsButton = styled.div`
  display: flex;
  justify-content: center;
  background: #ff9241;
  border-radius: 4px;
  padding: 14px 52px;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
    margin-top: 32px;
    padding: 15px 24px 16px 45px;
  }

  @media (min-width: 1440px) {
    margin-top: 48px;
  }
`;

const FindTickets = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 24px;
  color: #ffffff;
  margin: 0;

  @media (min-width: 768px) {
    margin-right: 24px;
  }
`;

const Aero = styled.img``;

export default function() {
  return (
    <Header>
      <Logotype>
        <Logo src={logo} alt="logo" />
        <Sitename>aviasales</Sitename>
      </Logotype>
      <Title>Поиск дешёвых авиабилетов</Title>
      <Description>Лучший способ купить авиабилеты дешево</Description>
      <Options>
        <OptionWrapper>
          <PointOfDeparture>
            <DepartureName>Москва</DepartureName>
            <Code>MOW</Code>
            <Arrow src={arrow} alt="arrow" />
          </PointOfDeparture>
        </OptionWrapper>
        <OptionWrapper>
          <Destination>
            <DestinationName>Город прибытия</DestinationName>
          </Destination>
        </OptionWrapper>
        <OptionWrapper>
          <Date>
            <DateThere>
              <There>Туда</There>
              <Calendar src={calendar} alt="calendar" />
            </DateThere>
            <DateBack>
              <Back>Обратно</Back>
              <Calendar src={calendar} alt="calendar" />
            </DateBack>
          </Date>
        </OptionWrapper>
        <OptionWrapper>
          <PassangersClassOptions>
            <NumberAndClass>
              <Number>1 пассажир,</Number>
              <Class>эконом</Class>
            </NumberAndClass>
            <Shape src={dropDownArrow} alt="shape" />
          </PassangersClassOptions>
        </OptionWrapper>
      </Options>
      <ButtonLine>
        <FindTicketsButton>
          <FindTickets>Найти билеты</FindTickets>
          <Aero src={aero} alt="aero" />
        </FindTicketsButton>
      </ButtonLine>
    </Header>
  );
}
