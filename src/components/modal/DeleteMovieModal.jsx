import React from "react";
import { styled } from "styled-components";
import Button from "../UI/button/Button";

const DeleteMovieModal = ( {closeModal, deleteMovieById, movieId} ) => {
  return (
    <>
      <StyledBackdrop onClick={closeModal}/>
      <StyledDeleteMovieModal>
          <h1>Are you sure to delete that?</h1>
        <DeleteAndCancelButtonsContainer>
          <Button
            onClick={closeModal}
            title="CANCEL" 
            color={{ backgroundColor: "#E77D3B" }}/>
          <Button
            onClick={() => deleteMovieById(movieId)} 
            title="DELETE" 
            color={{ backgroundColor: "#E77D3B" }}/>
        </DeleteAndCancelButtonsContainer>
      </StyledDeleteMovieModal>
    </>
  )
};

const StyledDeleteMovieModal = styled.div`
  position: fixed;
  right: 5%;
  text-align: center;
  border-radius: 10px;
  margin-top: 10%;
  top: 0;
  padding: 30px;
  background-color: white;
  width: 80%;
  height: 200px;
  z-index: 1;
`;

const DeleteAndCancelButtonsContainer = styled.div`
  margin: 0 auto;
  top: 0;
  margin-top: 10%;
  display: flex;
  justify-content: space-between;
  width: 30%;
`
const StyledBackdrop = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  background-color: black;
  opacity: 80%;
  width: 100%;
  height: 100vh;
`;
export default DeleteMovieModal;
