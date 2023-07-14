import React, { useState } from "react";
import Label from "../UI/label/Label";
import Input from "../UI/input/Input";
import "./NewMovieForm.css";
import Button from "../UI/button/Button";
import { movies } from "../movies/constants";

const NewMovieForm = ({ closeModalHandler, todos, setTodos }) => {
  const [movieTitleInput, setMovieTitleInput] = useState("");
  const [movieUrlInput, setMovieUrlInput] = useState("");
  const [movieRatingInput, setMovieRatingInput] = useState(0);

  function getMovieTitleInputValue(e) {
    setMovieTitleInput(e.target.value);
  }

  function getMovieUrlInputValue(e) {
    setMovieUrlInput(e.target.value);
  }

  function getMovieRatingInputValue(e) {
    setMovieRatingInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (movieRatingInput && movieUrlInput && movieRatingInput) {
      const newMovie = {
        id: Math.floor(Math.random() * 100000),
        title: movieTitleInput,
        rating: movieRatingInput,
        img: movieUrlInput,
      };

      setTodos([...todos, newMovie]);
      console.log(todos);
    }
    closeModalHandler();
  }

  return (
    <form className="new__movie__form">
      <div className="new__movie__title">
        <Label htmlFor="movie-title" title="movie title" />
        <Input value={getMovieTitleInputValue} id="movie-title" />
      </div>
      <div className="new__movie__url">
        <Label htmlFor="movie-url" title="movie url" />
        <Input value={getMovieUrlInputValue} id="movie-url" />
      </div>
      <div className="new__movie__rating">
        <Label htmlFor="movie-rating" title="movie rating" />
        <Input
          min="1"
          max="5"
          inputType="number"
          value={getMovieRatingInputValue}
          id="movie-rating"
        />
      </div>

      <div className="new-movie-add-button">
        <Button
          onClick={handleSubmit}
          color={{ backgroundColor: "#E77D3B" }}
          title="ADD MOVIE"
        />
      </div>
    </form>
  );
};

export default NewMovieForm;
