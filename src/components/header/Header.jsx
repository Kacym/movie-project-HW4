import React from "react";
import Button from "../UI/button/Button";
import { styled } from "styled-components";

const Header = ( {showModalHandler} ) => {
  const zero = 0;
  return (
    <StyledHeader>
      <HeaderContainer className="header__container">
        <div className="text">
          <h1>Favorite Movies</h1>
        </div>
        <div className="add_button">
          <Button onClick={showModalHandler} color={{ backgroundColor: "#E77D3B" }} title="ADD MOVIE" />
        </div>
      </HeaderContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
    background-color: #073698;
    display: flex;
    justify-content: center;
`
const HeaderContainer = styled.div`
    width: 90%;
    padding: 20px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
`
export default Header;
