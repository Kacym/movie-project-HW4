import React, { useRef, useState } from "react";
import Label from "../UI/label/Label";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";
import { styled } from "styled-components";

const NewMovieForm = ({ closeModalHandler, todos, setTodos }) => {
  const movieTitleInput = useRef()
  const movieUrlInput = useRef()
  const movieRatingInput = useRef()

  function handleSubmit(e) {
    e.preventDefault();
    if (movieRatingInput.current.value !== "" && movieUrlInput.current.value !== "" && movieRatingInput.current.value !== "") {
      const newMovie = {
        id: Math.floor(Math.random() * 100000),
        title: movieTitleInput.current.value,
        rating: movieRatingInput.current.value,
        img: movieUrlInput.current.value,
      };

      setTodos([...todos, newMovie]);
      console.log(todos);
    }
    closeModalHandler();
  }

  return (
    <StyledNewMovieForm>
      <StyledContainer className="new__movie__title">
        <Label htmlFor="movie-title" title="movie title" />
        <Input ref={movieTitleInput} id="movie-title" />
      </StyledContainer>
      <StyledContainer className="new__movie__url">
        <Label htmlFor="movie-url" title="movie url" />
        <Input ref={movieUrlInput} id="movie-url" />
      </StyledContainer>
      <StyledContainer className="new__movie__rating">
        <Label htmlFor="movie-rating" title="movie rating" />
        <Input
          ref={movieRatingInput}
          min="1"
          max="5"
          inputType="number"
          id="movie-rating"
        />
      </StyledContainer>

      <AddButtonContainer>
        <Button
          onClick={handleSubmit}
          color={{ backgroundColor: "#E77D3B" }}
          title="ADD MOVIE"
        />
      </AddButtonContainer>
    </StyledNewMovieForm>
  );
};

const StyledNewMovieForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 25%;
`;

const AddButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`;

export default NewMovieForm;
