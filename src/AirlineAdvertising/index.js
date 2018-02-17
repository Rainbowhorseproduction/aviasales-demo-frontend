import React from "react";
import styled from "styled-components";
import aeroflot from "./aeroflot.png";
import s7Airlines from "./s7Airlines.png";
import koreanAir from "./koreanAir.png";
import oneTwoTrip from "./oneTwoTrip.png";
import eliyaline from "./eliyaline.png";
import leftArrow from "./leftArrow.svg";
import rightArrow from "./rightArrow.svg";
import dot from "./dot.png";
import emptyDot from "./emptyDot.png";

const AirlineAdvertising = styled.div`
  background: background: #FFFFFF;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 1440px) {
  }
`;

const Slider = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  font-size: 32px;
  text-align: center;
  color: #5c5c5c;
  margin: 0;
  margin-bottom: 12px;
`;

const Arrow = styled.img`
  padding: 8px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Dotes = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 32px;
`;

const Dot = styled.img`
  margin: 24px 8px 0px 8px;
`;

const AirlineLogo = styled.div`
  width: 149px;
  margin: 12px 16px;
`;

export default function() {
  return (
    <AirlineAdvertising>
      <Title>Дешевые авиабилеты от крупнейших авиакомпаний и агенств</Title>
      <Container>
        <Arrow src={leftArrow} />
        <Slider>
          <AirlineLogo>
            <img src={aeroflot} alt="aeroflot" />
          </AirlineLogo>
          <AirlineLogo>
            <img src={s7Airlines} alt="s7Airlines" />
          </AirlineLogo>
          <AirlineLogo>
            <img src={oneTwoTrip} alt="oneTwoTrip" />
          </AirlineLogo>
          <AirlineLogo>
            <img src={koreanAir} alt="koreanAir" />
          </AirlineLogo>
          <AirlineLogo>
            <img src={eliyaline} alt="eliyaline" />
          </AirlineLogo>
        </Slider>
        <Arrow src={rightArrow} />
      </Container>
      <Dotes>
        <Dot src={dot} alt="dot" />
        <Dot src={emptyDot} alt="dot" />
        <Dot src={emptyDot} alt="emptyDot" />
      </Dotes>
    </AirlineAdvertising>
  );
}
