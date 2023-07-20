import React from "react";
import { styled } from "styled-components";

const Label = (props) => {
  return <StyledLabel htmlFor={props.htmlFor}>{props.title}</StyledLabel>;
};

const StyledLabel = styled.label`
  margin-bottom: 10px;
  font-size: 24px;
  font-family: sans;
  font-weight: bold;
`;

export default Label;
