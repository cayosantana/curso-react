import React from "react";
import "./App.css";
import { useState } from "react";
import Tarefas from "./components/Tarefas";
import AddItem from "./components/AddItem";
import {v4 as uuidv4} from 'uuid'
import Titulo from "./components/Titulo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DetailsTarefas from "./components/DetailsTarefas";

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
  const handleTarefasClick = (tarefasId) => {
      const novaTarefas = tarefas.map((tarefas) => {
        if (tarefas.id === tarefasId) return {...tarefas, completed: !tarefas.completed}
        return tarefas
      })
      setTarefas(novaTarefas)
  }
  const handleTarefasAdd = (tarefasTitle) => {
    const novaTarefas = [...tarefas, {
        title: tarefasTitle,
        id: uuidv4(),
        completed: false,
    },
  ]
  setTarefas(novaTarefas)
  }
  const handleTarefasDelet = (tarefasId) => {
      const novaTarefas = tarefas.filter(tarefas => tarefas.id !== tarefasId)

      setTarefas(novaTarefas)
  }
  return (
    <Router>
      <div className="container">
        <Titulo></Titulo>
        <AddItem handleTarefasAdd = {handleTarefasAdd}></AddItem>
        <Tarefas tarefas = {tarefas} handleTarefasClick ={handleTarefasClick} handleTarefasDelet = {handleTarefasDelet}></Tarefas> 
      </div> 
    </Router>
  )
}

export default App;
