import React from 'react';
import './AddItem.css'
import Button from './Button';

const AddItem = () => {
    return (
        <div className='add-item-container'>
            <input className='add-item-input' type="text" />
            <div className='add-button-container'>
                <Button>Adicionar</Button>
            </div>
        </div>
    )
}
 
export default AddItem;