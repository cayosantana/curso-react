import React from "react";
import Item from "./Item";


const Tarefas = ({tarefas, handleTarefasClick}) => {
    return <div>
        {tarefas.map(item => <Item item={item} handleTarefasClick = {handleTarefasClick}></Item>)}
    </div>
}

export default Tarefas;