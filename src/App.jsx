import React from "react";
import "./App.css";
import { useState } from "react";
import Tarefas from "./components/Tarefas";
import AddItem from "./components/AddItem";

const App = () => {
  const [tarefas, setTarefas] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: true,
    }
  ])
  return (
    <div>
      <div className="container">
        <AddItem></AddItem>
        <Tarefas tarefas = {tarefas}></Tarefas>
      </div>
    </div>
  )
}

export default App;
