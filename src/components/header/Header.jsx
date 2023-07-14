import React from "react";
import "./Header.css";
import Button from "../UI/button/Button";

const Header = ( {showModalHandler} ) => {
  return (
    <header id="header">
      <section className="header__container">
        <div className="text">
          <h1>Favorite Movies</h1>
        </div>
        <div className="add_button">
          <Button onClick={showModalHandler} color={{ backgroundColor: "#E77D3B" }} title="ADD MOVIE" />
        </div>
      </section>
    </header>
  );
};

export default Header;
