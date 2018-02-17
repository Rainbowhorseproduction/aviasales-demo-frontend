import React from "react";
import styled from "styled-components";
import CityCard from "./CityCard";
import krasnodar from "./krasnodar.svg";
import sochy from "./sochy.svg";
import stPetersburg from "./stPetersburg.svg";
import mineralWaters from "./mineralWaters.svg";
import simferopole from "./simferopole.svg";
import barcelona from "./barcelona.svg";
import flagRu from "./flagRu.svg";
import flagBarcelona from "./flagBarcelona.svg";

const CityAdvertisings = styled.div`
  background: #f8fcff;
  padding-bottom: 40px;
  padding-top: 1px;

  @media (min-width: 768px) {
    padding-bottom: 48px;
    padding-top: 1px;
  }
  @media (min-width: 1440px) {
    padding-bottom: 44px;
    padding-top: 1px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 195px;
    padding-right: 195px;
  }
`;

export default () => (
  <CityAdvertisings>
    <CityCard
      picture={krasnodar}
      flag={flagRu}
      city={"Краснодар"}
      country={"РОССИЯ"}
      price={1212}
      dateMonth={"18 марта"}
    />
    <CityCard
      picture={sochy}
      flag={flagRu}
      city={"Сочи (Адлер)"}
      country={"РОССИЯ"}
      price={1334}
      dateMonth={"27 марта"}
    />
    <CityCard
      picture={stPetersburg}
      flag={flagRu}
      city={"Санкт-Петербург"}
      country={"РОССИЯ"}
      price={1508}
      dateMonth={"19 февраля"}
    />
    <CityCard
      picture={mineralWaters}
      flag={flagRu}
      city={"Минеральные Воды"}
      country={"РОССИЯ"}
      price={2074}
      dateMonth={"13 марта"}
    />
    <CityCard
      picture={simferopole}
      flag={flagRu}
      city={"Симферополь (Крым)"}
      country={"РОССИЯ"}
      price={2407}
      dateMonth={"13 марта"}
    />
    <CityCard
      picture={barcelona}
      flag={flagBarcelona}
      city={"Барселона"}
      country={"РОССИЯ"}
      price={4247}
      dateMonth={"24 марта"}
    />
  </CityAdvertisings>
);
