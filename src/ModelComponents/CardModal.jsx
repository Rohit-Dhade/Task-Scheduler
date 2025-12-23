import React from 'react'
import Cardsmodal from './Cardsmodal';

const CardModal = ({ onClose ,Task ,taskindex}) => {
    const arrays = JSON.parse(localStorage.getItem("TaskProgress"));

    return (
        <div className='z-10 fixed inset-0 bg-gray bg-opacity-40 backdrop-blur-lg flex justify-center items-center'>
            <Cardsmodal index={taskindex} Task={Task} onClose={onClose}/>
        </div>
    )
}

export default CardModal