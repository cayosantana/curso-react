import React from 'react';
import './Item.css'
import {CgClose} from 'react-icons/cg'

const Item = ({item, handleTarefasClick, handleTarefasDelet}) => {
    return ( 
        <div className='item-container' style={item.completed ? {borderLeft: '10px solid chartreuse'} : {}}>
            <div className='item-title' onClick={() => handleTarefasClick(item.id)}>
                {item.title}
            </div>
            <div className='button-container'>
                <button className='button-remove' onClick={() => handleTarefasDelet(item.id)}>
                    <CgClose></CgClose>
                </button>
            </div>
        </div>
    
    );
}
export default Item;