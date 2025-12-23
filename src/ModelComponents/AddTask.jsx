import React from 'react'

const AddTask = ({onClose}) => {
  return (
    <div onClick={onClose} className='fixed inset-0 bg-black/70 backdrop-blur-lg flex justify-center items-center transition-all duration-300'>
        <div>
            Add Task
        </div>
    </div>
  )
}

export default AddTask