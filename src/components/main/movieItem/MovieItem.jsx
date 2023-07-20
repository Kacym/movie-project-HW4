import React from "react";
import Button from "../../UI/button/Button";
import { styled } from "styled-components";

const MovieItem = ({ movie, deleteMovieById }) => {
  return (
    <StyledMovieItem className="movie__item" key={movie.id}>
      <StyledImgContainer>
        <StyledImg src={movie.img} alt={movie.title} />
      </StyledImgContainer>
      <MovieInfoContainer>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieRating>{movie.rating}/5 stars</MovieRating>
        <Button
          color={{ backgroundColor: "red", marginRight: "20px" }}
          title="DELETE"
          onClick={() => deleteMovieById(movie.id)}
        />
        <Button color={{ backgroundColor: "gray" }} title="EDIT" />
      </MovieInfoContainer>
    </StyledMovieItem>
  );
};

const StyledMovieItem = styled.li`
  display: flex;
  box-shadow: 2px 2px 2px 2px;
  margin-bottom: 20px;
  border-radius: 10px;
  width: 750px;
  height: 250px;
`;

const StyledImgContainer = styled.div`
  width: 200px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const MovieInfoContainer = styled.div`
  width: 500px;
  padding-left: 20px;
  padding-top: 20px;
`;

const MovieTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 30px;
`;

const MovieRating = styled.span`
  margin-right: 20px;
  background-color: #e77d3b;
  color: white;
  padding: 1px 20px;
  font-size: 18px;
  border-radius: 15px;
`;
export default MovieItem;
