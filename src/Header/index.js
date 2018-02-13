import React from "react";
import logo from "./logo.png";
import styled from "styled-components";
import arrow from "./arrow.svg";

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
  padding: 32px; 6px; 16px; 6px;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
`;

const Sourse = styled.div`
  display: flex;
  background: #ffffff;
  padding: 18px 16px;
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
      </Options>
    </Header>
  );
}
