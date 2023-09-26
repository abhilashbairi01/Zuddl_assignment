import React from "react";
import "./App.css";
import Tacoheader from "./Components/header";
import MainPage from "./Components/Main";
import Todo from "./Components/Todo";
import Doing from "./Components/Doing";
import Done from "./Components/Done";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <div className="App">
      <Tacoheader />

      <div style={{ display: "flex" }}>
        <DndProvider backend={HTML5Backend}>
          <MainPage />
        </DndProvider>
        <DndProvider backend={HTML5Backend}>
          <Todo />
        </DndProvider>
        <DndProvider backend={HTML5Backend}>
          <Doing />
        </DndProvider>
        <DndProvider backend={HTML5Backend}>
          <Done />
        </DndProvider>
      </div>
    </div>
  );
}

export default App;
