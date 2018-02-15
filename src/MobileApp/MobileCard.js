import React from "react";
import styled from "styled-components";

const MobileCard = styled.div`
  display: flex;
  margin-bottom: 20px;
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
    <MobileCard>
      <Picture src={props.oslink} />
      <Name>{props.name}</Name>
    </MobileCard>
  );
}
