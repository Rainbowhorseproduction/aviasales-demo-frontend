import React from "react";
import styled from "styled-components";

const MobileCard = styled.div`
  display: flex;
  width: 33%;
  margin-bottom: 12px;
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
    <MobileCard>
      <Picture src={props.oslink} />
      <Name>{props.name}</Name>
    </MobileCard>
  );
}
