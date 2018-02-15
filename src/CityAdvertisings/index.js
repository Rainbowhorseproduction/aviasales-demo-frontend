import React from "react";
import styled from "styled-components";
import CityCard from "./CityCard";
import krasnodar from "./krasnodar.svg";
import sochy from "./sochy.svg";
import stPetersburg from "./stPetersburg.svg";
import mineralWaters from "./mineralWaters.svg";
import simferopole from "./simferopole.svg";
import barcelona from "./barcelona.svg";

const CityAdvertisings = styled.div`
  padding-bottom: 28px;
`;

export default () => (
  <CityAdvertisings>
    <CityCard
      picture={krasnodar}
      city={"Краснодар"}
      country={"РОССИЯ"}
      price={1212}
      date={"18 марта"}
    />
    <CityCard
      picture={sochy}
      city={"Сочи (Адлер)"}
      country={"РОССИЯ"}
      price={1334}
      date={"27 марта"}
    />
    <CityCard
      picture={stPetersburg}
      city={"Санкт-Петербург"}
      country={"РОССИЯ"}
      price={1508}
      date={"19 февраля"}
    />
    <CityCard
      picture={mineralWaters}
      city={"Минеральные Воды"}
      country={"РОССИЯ"}
      price={2074}
      date={"13 марта"}
    />
    <CityCard
      picture={simferopole}
      city={"Симферополь (Кр…"}
      country={"РОССИЯ"}
      price={2407}
      date={"13 марта"}
    />
    <CityCard
      picture={barcelona}
      city={"Барселона"}
      country={"РОССИЯ"}
      price={4247}
      date={"24 марта"}
    />
  </CityAdvertisings>
);
