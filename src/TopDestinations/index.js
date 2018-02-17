import React from "react";
import styled from "styled-components";
import Category from "./Category";
import compass from "./compass.svg";
import edit from "./edit.svg";
import world from "./world.svg";
import three from "./three.svg";
import bag from "./bag.svg";
import building from "./building.svg";
import coctail from "./coctail.svg";
import stroller from "./stroller.svg";

const TopDestinations = styled.div`
  background: #f8fcff;
  padding: 28px 6px 28px;
  text-align: center;

  @media (min-width: 768px) {
    padding: 56px 86px 38px 56px;
  }
  @media (min-width: 1440px) {
    padding: 56px 413px 39px 413px;
  }
`;

const Compass = styled.img``;

const Title = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  text-align: center;
  color: #4a4a4a;
  margin-top: 24px;
  margin-bottom: 0px;

  @media (min-width: 768px) {
    margin-top: 20px;
    line-height: 36px;
    font-size: 24px;
  }
`;

const CityButton = styled.button`
  font-family: Roboto;
  font-style: normal;
  line-height: 24px;
  font-size: 18px;
  text-align: center;
  color: #00ace2;
  cursor: pointer;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    line-height: 36px;
    font-size: 24px;
  }
`;

const EditIcon = styled.img`
  margin-left: 8px;
`;

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  magin-top: 32px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    flex-wrap: none;
    align-items: center;
  }
`;

const Col = styled.div`
  display: flex;
  width: 33.33%;
  justify-content: space-around;

  @media (min-width: 768px) {
    width: 16.66666%;
  }
`;

export default function(props) {
  return (
    <TopDestinations>
      <Compass src={compass} alt="compass" />
      <Title>Популярные направления перелетов из города</Title>
      <CityButton>
        Москва<EditIcon src={edit} alt="pencil icon" />
      </CityButton>
      <Categories>
        <Col xs={4}>
          <Category icon={world} label={"КУДА УГОДНО"} />
        </Col>
        <Col xs={4}>
          <Category icon={three} label={"CОЛНЦЕ И МОРЕ"} />
        </Col>
        <Col xs={4}>
          <Category icon={bag} label={"ШОПИНГ, ГОРОД"} />
        </Col>
        <Col xs={4}>
          <Category icon={building} label={"КУЛЬТУРА И ИСТОРИЯ"} />
        </Col>
        <Col xs={4}>
          <Category icon={coctail} label={"НОЧНАЯ ЖИЗНЬ"} />
        </Col>
        <Col xs={4}>
          <Category icon={stroller} label={"ОТДЫХ С ДЕТЬМИ"} />
        </Col>
      </Categories>
    </TopDestinations>
  );
}
