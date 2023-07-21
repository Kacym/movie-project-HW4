import React from "react";
import MovieItem from "./movieItem/MovieItem";
import { styled } from "styled-components";

const MainContainer = ({ deleteMovieById, todos }) => {
  console.log(deleteMovieById);
  return (
    <StyledMain>
      <MovieList>
        {todos.map((movie) => {
          return <MovieItem deleteMovieById={deleteMovieById} key={movie.id} movie={movie} />;
        })}
      </MovieList>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

const MovieList = styled.ul`
  width: 60%;
  list-style: none;
`;
export default MainContainer;
