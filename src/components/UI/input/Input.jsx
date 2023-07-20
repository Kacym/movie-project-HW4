import React from "react";
import { styled } from "styled-components";

const Input = (props) => {
  return (
    <StyledInput
      min={props.min}
      max={props.max}
      onChange={props.value}
      id={props.id}
      type={props.inputType}
    />
  );
};

const StyledInput = styled.input`
  height: 50%;
  font-size: 24px;
  &:focus {
    outline: none;
  }
`;
export default Input;
