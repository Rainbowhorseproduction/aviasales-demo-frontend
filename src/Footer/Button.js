import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  font-size: 12px;
  color: #4a4a4a;
  border: none;
  background: none;
  cursor: pointer;
  margin-top: 4px;
  padding: 0;
`;

export default props => <Button>{props.children} →</Button>;
