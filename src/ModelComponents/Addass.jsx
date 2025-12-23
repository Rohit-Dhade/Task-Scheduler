import React from 'react'
import { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import AddTask from './AddTask';
import AddAssignment from './AddAssignment';

const Addass = () => {
    const [addassignment, setaddassignment] = useState(false);

    return (
        <>
            <div className='h-[25%] w-full flex items-center justify-center'>
                <button onClick={()=>setaddassignment(true)} className='w-[75%] bg-[#F1EEF5] h-full shadow-2xl rounded-md flex items-center justify-center gap-3 text-[13px] active:scale-98 hover:bg-[#E2EEF0]'><IoMdAdd size={24} /> Add Assignment </button>
            </div>
            {addassignment && <AddAssignment onClose={()=>setaddassignment(false)}/>}
        </>
    )
}

export default Addass