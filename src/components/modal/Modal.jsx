import React from "react";
import NewMovieForm from "../newMovieForm/NewMovieForm";
import { styled } from "styled-components";

const Modal = ({ closeModalHandler, todos, setTodos }) => {
  return (
    <>
      <Backdrop onClick={closeModalHandler}></Backdrop>
      <StyledModal className="modal">
        <NewMovieForm
          closeModalHandler={closeModalHandler}
          todos={todos}
          setTodos={setTodos}
        />
      </StyledModal>
    </>
  );
};

const StyledModal = styled.div`
  position: fixed;
  border-radius: 10px;
  margin-top: 5%;
  margin-left: 10%;
  padding: 30px;
  background-color: white;
  width: 80%;
  height: 400px;
  z-index: 1;
`;

const Backdrop = styled.div`
  position: fixed;
  background-color: black;
  opacity: 80%;
  width: 100%;
  height: 100vh;
`;

export default Modal;
