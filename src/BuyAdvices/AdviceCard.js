import React from "react";
import styled from "styled-components";

const AdviceCard = styled.div`
  background: #ffffff;
  padding: 8px 6px;

  @media (min-width: 768px) {
    padding: 12px 0px;
  }
`;

const Title = styled.h3`
  display: flex;
  margin: 0;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

const Picture = styled.img`
  margin-right: 10px;

  @media (min-width: 768px) {
    margin-right: 8px;
  }
`;

const Text = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 18px;
  font-size: 13px;
  color: #4a4a4a;
  margin: 0;
`;

const Paper = styled.div`
  display: flex;
`;

const Info = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
  color: #4a4a4a;
  margin: 0;
`;

const DetailsButton = styled.button`
  display: flex;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
  color: #00ace2;
  cursor: pointer;
  border: none;
  background: none;
  display: inline;
  margin-left: 6px;
`;

export default function(props) {
  return (
    <AdviceCard>
      <Title>
        <Picture src={props.pic} alt="picture" />
        <Text>{props.topic}</Text>
      </Title>
      <Paper>
        <Info>
          {props.text}
          <DetailsButton>{props.details}</DetailsButton>
        </Info>
      </Paper>
    </AdviceCard>
  );
}
