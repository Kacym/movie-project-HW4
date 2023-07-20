import React, { forwardRef } from "react";
import { styled } from "styled-components";

const Input = forwardRef((props, ref) => {
  return (
    <StyledInput
      ref={ref}
      min={props.min}
      max={props.max}
      onChange={props.value}
      id={props.id}
      type={props.inputType}
    />
  );
});

const StyledInput = styled.input`
  height: 50%;
  font-size: 24px;
  &:focus {
    outline: none;
  }
`;
export default Input;
