import React from "react";
import Item from "./Item";


const Tarefas = ({tarefas}) => {
    return <div>
        {tarefas.map(item => <Item item={item}></Item>)}
    </div>
}

export default Tarefas;