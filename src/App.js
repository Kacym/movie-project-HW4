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
    const filteredArray = todos.filter((item) => item.id !== id)
    setTodos(filteredArray)
  }

  return (
    <div className="App">
      {showModal && (
        <div>
          <Modal
            closeModalHandler={openAndCloseModal}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
      )}
      <Header showModalHandler={openAndCloseModal} />
      <MainContainer todos={todos} deleteMovieById={deleteMovieById} />
    </div>
  );
}

export default App;
