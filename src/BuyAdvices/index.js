import React from "react";
import styled from "styled-components";
import AdviceCard from "./AdviceCard";
import plane from "./plane.svg";
import dog from "./dog.svg";
import list from "./list.svg";

const Advices = styled.div`
  padding-top: 12px;
  padding-bottom: 16px;
`;

export default function() {
  return (
    <Advices>
      <AdviceCard
        pic={plane}
        topic={"КАК КУПИТЬ ДЕШЕВЫЕ АВИАБИЛЕТЫ?"}
        text={
          "Aviasales.ru — это метапоисковик авиабилетов. Мы ищем билеты на самолет по сотням авиакомпаний и находим за считанные минуты самые дешевые авиабилеты. Чтобы купить авиабилет дешево, воспользуйтесь нашим поиском, который совершенно бесплатно сравнивает цены на авиабилеты онлайн и находит самые дешевые перелеты. Больше нет смысла ходить в авиакассы, обзванивать агентства — дешевый билет находится на расстоянии клика. На нашем сайте вы можете подобрать дешевые билеты на самолет в Европу, Азию и на другие континенты. Мы написали для вас простую инструкцию о том, как пользоваться поиском и экономить на перелетах от 1000 до 20 000 руб в год."
        }
        details={"Подробнее"}
      />
      <AdviceCard
        pic={dog}
        topic={"ЭЛЕКТРОННЫЙ АВИАБИЛЕТ"}
        text={
          "Электронный авиабилет — это, по сути, обычный билет на самолет, но только в менее привычном для путешественника виде. Вся информация об авиаперелете (данные пассажира, маршрут следования) хранится в электронной базе, а пассажир получает на руки маршрут-квитанцию. Некоторые пассажиры, купив авиабилет онлайн и получив маршрут-квитанцию, удивлены ее видом — это обыкновенный лист формата А4, на котором распечатана вся информация о предстоящем перелете. Однако это действительно официальный документ, подтверждающий договор между авиаперевозчиком и пассажиром. При регистрации на рейс пассажир должен предъявить маршрут-квитанцию вместе с удостоверением личности точно так же, как предъявляют обыкновенный бумажный билет. Следует отметить, что электронный билет, приобретенный онлайн, стоит дешевле своего бумажного аналога."
        }
        details={"Подробнее"}
      />
      <AdviceCard
        pic={list}
        topic={"20 СОВЕТОВ АВИАПУТЕШЕСТВЕННИКАМ?"}
        text={
          "Есть масса путеводителей по странам, но ни одного о том, как провести время в самолете. Для того, чтобы сделать ваш перелет максимально комфортным, мы написали 20 советов о подготовке к путешествию. Ведь настоящее путешествие начинается со слов «Добро пожаловать на борт нашего самолета»!"
        }
        details={"Подробнее"}
      />
    </Advices>
  );
}
