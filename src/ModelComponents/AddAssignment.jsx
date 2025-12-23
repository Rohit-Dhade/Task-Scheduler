import React from 'react'

const AddAssignment = ({onClose}) => {
  return (
    <div onClick={onClose} className='fixed inset-0 bg-black/70 backdrop-blur-lg flex justify-center items-center transition-all duration-300'>
        <div>
            Assignment data
        </div>
    </div>
  )
}

export default AddAssignment