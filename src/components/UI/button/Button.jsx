import React from "react";
import { styled } from "styled-components";

const Button = (props) => {
  return (
    <StyledButton
      onChange={props.onChange}
      onClick={props.onClick}
      style={props.color}
    >
      {props.title}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 110px;
  height: 40px;
  border-radius: 9px;
  border: none;
  color: white;
  cursor: pointer;
  &:active {
    opacity: 80%;
  }
`;
export default Button;
