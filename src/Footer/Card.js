import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  width: 33%;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    width: auto;
    margin-right: 32px;
    margin-bottom: 0px;
  }
`;

const Picture = styled.img`
  margin-right: 5px;
`;

const Name = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  color: #4a4a4a;
  margin: 0;
`;

export default function(props) {
  return (
    <Card>
      <Picture src={props.oslink} />
      <Name>{props.name}</Name>
    </Card>
  );
}
