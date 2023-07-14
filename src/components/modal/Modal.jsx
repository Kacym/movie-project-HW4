import React from "react";
import NewMovieForm from "../newMovieForm/NewMovieForm";
import "./Modal.css";

const Modal = ({ closeModalHandler, todos, setTodos }) => {
  return (
    <div className="modal">
      <NewMovieForm
        closeModalHandler={closeModalHandler}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
};

export default Modal;
