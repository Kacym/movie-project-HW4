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
  top: 70px;
  margin-left: 100px;
  padding: 30px;
  background-color: white;
  width: 80%;
  height: 400px;
  z-index: 1;
`;

const Backdrop = styled.div`
  top: 0;
  position: fixed;
  background-color: black;
  opacity: 80%;
  width: 100%;
  height: 100vh;
`;

export default Modal;
