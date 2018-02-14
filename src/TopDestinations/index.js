import React from "react";
import styled from "styled-components";
import compass from "./compass.svg";
import edit from "./edit.svg";
import categoryIconBack from "./categoryIconBack.svg";
import world from "./world.svg";
import three from "./three.svg";
import bag from "./bag.svg";

const TopDestinations = styled.div`
  background: #f8fcff;
  padding: 40px 6px 16px;
  text-align: center;
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
`;

const EditIcon = styled.img`
  margin-left: 8px;
`;

const Categories = styled.div`
  magin-top: 32px;
  flex-wrap: wrap;
  display: flex;
`;

const Category = styled.div`
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid #00ace2;
  }
`;

const CategoryIconContainer = styled.div`
  position: relative;
  text-align: center;
  margin-top: 32px;
`;

const CategoryIconBack = styled.img``;

const CategoryIcon = styled.img`
  position: absolute;
  width: 22px;
  height: 22px;
  left: calc(50% - 11px);
  top: calc(50% - 13px);
`;

const CategoryLabel = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  color: #5c5c5c;
  margin-top: 12px;
  margin-bottom: 2px;
`;

export default function() {
  return (
    <TopDestinations>
      <Compass src={compass} alt="compass" />
      <Title>Популярные направления перелетов из города</Title>
      <CityButton>
        Москва<EditIcon src={edit} alt="pencil icon" />
      </CityButton>
      <Categories>
        <Category>
          <CategoryIconContainer>
            <CategoryIconBack src={categoryIconBack} alt="icon back" />
            <CategoryIcon src={world} alt="world icon" />
          </CategoryIconContainer>
          <CategoryLabel>
            КУДА<br />УГОДНО
          </CategoryLabel>
        </Category>
      </Categories>
    </TopDestinations>
  );
}
