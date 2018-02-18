import React from "react";
import styled from "styled-components";
import Card from "./Card";
import star from "./star.svg";
import phone from "./phone.png";
import apple from "./apple.svg";
import android from "./android.svg";
import wf from "./wf.svg";
import halfStar from "./halfStar.png";

const MobileApp = styled.div`
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
  display: flex;

  @media (min-width: 1440px) {
    padding: 0px 203px;
  }
`;

const TitleBlock = styled.div`
  padding: 24px 12px;

  @media (min-width: 768px) {
    padding-top: 46px;
  }

  @media (min-width: 1440px) {
    padding-top: 66px;
    padding-left: 79px;
  }
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

  @media (min-width: 768px) {
    line-height: 40px;
    font-size: 32px;
    text-align: left;
  }
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

  @media (min-width: 1440px) {
    justify-content: start;
  }
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: space-around;
  }

  @media (min-width: 1440px) {
    justify-content: start;
  }
`;

const LeftPhoneContainer = styled.div`
  position: relative;
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 245px;
  }
`;

const Content = styled.div``;

const SmallPhone = styled.img`
  width: 162px;
  height: 213px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const BigPhone = styled.img`
  position: absolute;
  width: 237px;
  height: 312px;
  bottom: 0px;
  right: 0px;
`;

const Cards = styled.div`
  margin-left: 15px;

  @media (min-width: 768px) {
    display: flex;
    margin: 0;
    padding-bottom: 64px;
  }

  @media (min-width: 1440px) {
    margin-left: 58px;
  }
`;

const Delimiter = styled.div`
  border-right: 1px solid #ffffff;
`;

export default function(props) {
  return (
    <MobileApp>
      <LeftPhoneContainer>
        <BigPhone src={phone} alt="phone" />
      </LeftPhoneContainer>
      <Content>
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
        <BottomRow>
          <SmallPhone src={phone} alt="phone" />
          <Cards>
            <Card oslink={apple} name={"iPhone или iPad"} />
            <Delimiter />
            <Card oslink={android} name={"Android"} />
            <Delimiter />
            <Card oslink={wf} name={"Windows Phone"} />
          </Cards>
        </BottomRow>
      </Content>
    </MobileApp>
  );
}
