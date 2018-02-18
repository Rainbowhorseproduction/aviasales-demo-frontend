import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin: 0px 21px 0px 21px;
  }
`;

const Picture = styled.img``;

const Name = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 14px;
  color: #ffffff;
  margin: 0px;
  margin-left: 8px;
`;

export default function(props) {
  return (
    <Card>
      <Picture src={props.oslink} />
      <Name>{props.name}</Name>
    </Card>
  );
}
