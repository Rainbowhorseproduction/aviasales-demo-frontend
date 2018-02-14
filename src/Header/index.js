import React from "react";
import logo from "./logo.png";
import styled from "styled-components";
import arrow from "./arrow.svg";
import calendar from "./calendar.svg";
import shape from "./shape.svg";
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
`;

const Logo = styled.img``;

const Title = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  margin-top: 47px;
  margin-bottom: 16px;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
`;

const Sourse = styled.div`
  display: flex;
  background: #ffffff;
  padding: 18px 16px;
  margin-bottom: 2px;
`;

const SourseName = styled.p`
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
  padding: 18px 16px;
  background: #ffffff;
  margin-bottom: 2px;
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
  display: flex;
  justify-content: space-between;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  color: #a0b0b9;
  margin-bottom: 2px;
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
`;

const Calendar = styled.img``;

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
  justify-content: space-between;
  align-items: baseline;
  background: #ffffff;
  margin-bottom: 16px;
  padding: 18px 16px;
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

const FindTicketsButton = styled.div`
  display: flex;
  justify-content: center;
  background: #ff9241;
  border-radius: 4px;
`;

const FindTickets = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 24px;
  color: #ffffff;
  padding: 14px 16px 13px 0px;
  margin: 0;
`;

const Aero = styled.img``;

export default function() {
  return (
    <Header>
      <Logo src={logo} alt="logo" />
      <Title> Поиск дешёвых авиабилетов </Title>
      <Options>
        <Sourse>
          <SourseName>Москва</SourseName>
          <Code>MOW</Code>
          <Arrow src={arrow} alt="arrow" />
        </Sourse>
        <Destination>
          <DestinationName>Город прибытия</DestinationName>
        </Destination>
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
        <PassangersClassOptions>
          <NumberAndClass>
            <Number>1 пассажир,</Number>
            <Class>эконом</Class>
          </NumberAndClass>
          <Shape src={shape} alt="shape" />
        </PassangersClassOptions>
        <FindTicketsButton>
          <FindTickets>Найти билеты</FindTickets>
          <Aero src={aero} alt="aero" />
        </FindTicketsButton>
      </Options>
    </Header>
  );
}
