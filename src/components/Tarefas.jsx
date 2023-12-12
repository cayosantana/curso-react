import React from "react";
import Item from "./Item";


const Tarefas = ({tarefas, handleTarefasClick, handleTarefasDelet}) => {
    return <div>
        {tarefas.map(item => <Item item={item} handleTarefasClick = {handleTarefasClick} handleTarefasDelet = {handleTarefasDelet}></Item>)}
    </div>
}

export default Tarefas;