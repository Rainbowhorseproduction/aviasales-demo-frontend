import React from "react";
import styled from "styled-components";
import Card from "./MobileCard";
import star from "./star.svg";
import phone from "./phone.png";
import apple from "./apple.svg";
import android from "./android.svg";
import wf from "./wf.svg";
import halfStar from "./halfStar.png";

const MobileApp = styled.div`
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);

  @media (min-width: 1440px) {
    padding: 0px 203px;
  }
`;

const TitleBlock = styled.div`
  padding: 24px 12px;
`;

const Title = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
  margin: 0;
`;

const Star = styled.img`
  width: 10px;
  height: 10px;
  margin-right: 5px;
`;

const AmountOfScore = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
  color: #ffffff;
  margin: 0;
  margin-left: 3px;
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 19px;
  align-items: center;
`;

const AppLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Phone = styled.img`
  width: 162px;
  height: 213px;
  margin-right: 15px;
`;

const Cards = styled.div`
  width: 50%;
  margin-right: 8px;
`;

export default function(props) {
  return (
    <MobileApp>
      <TitleBlock>
        <Title>Скачай мобильное приложение Aviasales.ru</Title>
        <Rating>
          <Star src={star} alt="star" />
          <Star src={star} alt="star" />
          <Star src={star} alt="star" />
          <Star src={star} alt="star" />
          <Star src={halfStar} alt="halfstar" />
          <AmountOfScore>Более 103 000 оценок</AmountOfScore>
        </Rating>
      </TitleBlock>
      <AppLinks>
        <Phone src={phone} alt="telefon" />
        <Cards>
          <Card oslink={apple} name={"iPhone или iPad"} />
          <Card oslink={android} name={"Android"} />
          <Card oslink={wf} name={"Windows Phone"} />
        </Cards>
      </AppLinks>
    </MobileApp>
  );
}
