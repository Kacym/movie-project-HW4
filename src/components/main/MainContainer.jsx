import React from "react";
import MovieItem from "./movieItem/MovieItem";
import "./MainContainer.css";

const MainContainer = ({ todos, deleteMovieById }) => {
  return (
    <main id="main">
      <ul className="movie_list">
        {todos.map((movie) => {
          return <MovieItem deleteMovieById={deleteMovieById} key={movie.id} movie={movie} />;
        })}
      </ul>
    </main>
  );
};

export default MainContainer;
