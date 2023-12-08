import React, { useState } from 'react';
import './AddItem.css'
import Button from './Button';

const AddItem = ({handleTarefasAdd}) => {
    const [inputDados, setInputDados] = useState("")

    const handleInputChange = (evento) => {
        setInputDados(evento.target.value)
    }
    const handleAddTarefasClick = () => {
        handleTarefasAdd(inputDados)
        setInputDados("")
    }
    return (
        <div className='add-item-container'>
            <input onChange={handleInputChange} value={inputDados}className='add-item-input' type="text" />
            <div className='add-button-container'>
                <Button onClick={handleAddTarefasClick}>Adicionar</Button>
            </div>
        </div>
    )
}
 
export default AddItem;