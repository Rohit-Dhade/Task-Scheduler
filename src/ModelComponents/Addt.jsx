import React from 'react'
import { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import AddTask from './AddTask';

const Addt = () => {
    const [addtask, setaddtask] = useState(false);

    return (
        <>
            <div className='h-[25%] w-full flex items-center justify-center'>
                <button onClick={()=>setaddtask(true)} className='w-[75%] bg-[#F1EEF5] h-full shadow-2xl rounded-md flex items-center justify-center gap-3 text-[13px] active:scale-98 hover:bg-[#E2EEF0]'><IoMdAdd size={24} /> Add Task </button>
            </div>
            {addtask && <AddTask onClose={()=>setaddtask(false)}/>}
        </>
    )
}

export default Addt