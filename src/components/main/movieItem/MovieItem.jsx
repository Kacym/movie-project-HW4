import React from "react";
import "./MovieItem.css";
import Button from "../../UI/button/Button";

const MovieItem = ({ movie, deleteMovieById }) => {
  return (
    <li className="movie__item" key={movie.id}>
      <div className="img">
        <img src={movie.img} alt={movie.title} />
      </div>
      <div className="movie__info">
        <h1 className="movie__title">{movie.title}</h1>
        <span>{movie.rating}/5 stars</span>
        <Button
          color={{ backgroundColor: "red", marginRight: "20px" }}
          title="DELETE"
          onClick={() => deleteMovieById(movie.id)}
        />
        <Button color={{ backgroundColor: "gray" }} title="EDIT" />
      </div>
    </li>
  );
};

export default MovieItem;
