import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import MainContainer from "./components/main/MainContainer";
import Modal from "./components/modal/Modal";
import { movies } from "./components/movies/constants";

function App() {

  const [showModal, setShowModal] = useState(false);

  const [todos, setTodos] = useState(movies);

  function openAndCloseModal() {
    setShowModal((prev) => !prev);
  }

  function deleteMovieById(id) {
    const filteredArray = todos.filter((item) => item.id !== id);
    setTodos(filteredArray);
  }

  return (
    <div className="App">
      {showModal && (
          <Modal
            closeModalHandler={openAndCloseModal}
            todos={todos}
            setTodos={setTodos}
          />
      )}
      <Header showModalHandler={openAndCloseModal} />
      <MainContainer
        deleteMovieById={deleteMovieById} 
        todos={todos} />
    </div>
  );
}

export default App;
