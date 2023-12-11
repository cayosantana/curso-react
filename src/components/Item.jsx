import React from 'react';
import './Item.css'

const Item = ({item, handleTarefas}) => {
    return ( <div className='item-container'>
        {item.title}
        
    </div> );
}
export default Item;