import React from "react";
import styled from "styled-components";
import delimiter from "./delimiter.svg";
import iconBack from "./iconBack.png";
import twitter from "./twitter.svg";
import facebook from "./facebook.svg";
import vk from "./vk.svg";
import rss from "./rss.svg";

const Subscribe = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Delimiter = styled.div`
  background: #fff repeat-x url(${delimiter}) 50% 0;
  height: 7px;
`;

const ContentRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1440px) {
    padding: 0px 204px;
  }
`;

const Content = styled.div`
  width: 50%;

  @media (min-width: 1440px) {
    display: flex;
    width: 100%;
    padding-top: 32px;
    padding-bottom: 24px;
  }
`;

const Texts = styled.div`
  text-align: center;

  @media (min-width: 1440px) {
    width: 50%;
    text-align: left;
  }
`;

const Title = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #5c5c5c;
  margin: 0;
  margin-top: 25px;
  @media (min-width: 1440px) {
    text-align: left;
  }
`;

const Description = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 22px;
  font-size: 16px;
  text-align: center;
  color: #5c5c5c;
  margin: 0;
  margin-top: 4px;
  @media (min-width: 1440px) {
    text-align: left;
  }
`;

const IconsAndSubscribe = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    width: 50%;
    margin-left: 13px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 24px;

  @media (min-width: 1440px) {
    margin: 0px;
    width: 50%;
  }
`;

const SocialIcon = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: url(${iconBack});
  width: 38px;
  height: 38px;
  margin-left: 3px;
  margin-right: 3px;

  @media (min-width: 1440px) {
  }
`;

const EmailAndSubscribe = styled.div`
  display: flex;
  padding-bottom: 61px;
  width: 100%;

  @media (min-width: 1440px) {
    padding: 0px;
  }
`;

const Email = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  color: #a0b0b9;
  margin: 0;
  background: #ffffff;
  border: 1px solid #a0b0b9;
  border-radius: 2px;
  padding: 7px 9px 7px 13px;
  width: 100%;
`;

const Sub = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  margin: 0;
  background: #ff8e41;
  border-radius: 2px;
  padding: 8px 20px 6px 20px;
`;

export default function(props) {
  return (
    <Subscribe>
      <Delimiter />
      <ContentRow>
        <Content>
          <Texts>
            <Title>Хотите знать всё о скидках на авиабилеты</Title>
            <Description>
              Вы можете подписаться на нашу рассылку через соцсети или по
              электронной почте
            </Description>
          </Texts>
          <IconsAndSubscribe>
            <SocialIcons>
              <SocialIcon>
                <img src={twitter} alt="twitter" />
              </SocialIcon>
              <SocialIcon>
                <img src={facebook} alt="facebook" />
              </SocialIcon>
              <SocialIcon>
                <img src={vk} alt="vk" />
              </SocialIcon>
              <SocialIcon>
                <img src={rss} alt="rss" />
              </SocialIcon>
            </SocialIcons>
            <EmailAndSubscribe>
              <Email>Ваш email</Email>
              <Sub>Подписаться</Sub>
            </EmailAndSubscribe>
          </IconsAndSubscribe>
        </Content>
      </ContentRow>
    </Subscribe>
  );
}
