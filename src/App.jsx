import React from "react";
import "./App.css";
import { useState } from "react";
import Tarefas from "./components/Tarefas";
import AddItem from "./components/AddItem";
import {v4 as uuidv4} from 'uuid'


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
  return (
    <div>
      <div className="container">
        <AddItem handleTarefasAdd = {handleTarefasAdd}></AddItem>
        <Tarefas tarefas = {tarefas} handleTarefasClick = {handleTarefasClick}></Tarefas>
      </div>
    </div>
  )
}

export default App;
