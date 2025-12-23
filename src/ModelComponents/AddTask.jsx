import React from 'react'
import { GrClose } from "react-icons/gr";
import { useState } from 'react';

const AddTask = ({ onClose }) => {
    let today = new Date().toISOString().split('T')[0];
    const [date, setdate] = useState("");
    const [title, settitle] = useState("");
    const [subtitle, setsubtitle] = useState("");

    return (
        <div className='fixed inset-0 bg-black/70 backdrop-blur-lg flex justify-center items-center transition-all duration-300'>
            <div className='relative h-[40%] w-[60%] bg-white'>
                <button onClick={onClose} className='absolute top-2 right-3'><GrClose /></button>
                <form>
                    <input className='bg-white' type="text" placeholder='Enter the task name' value={title} onChange={(e)=>settitle(e.target.value)} />
                    <input type="text" placeholder='Enter domain' value={subtitle} onChange={(e)=>setsubtitle(e.target.value)} />
                    <input type="date" min={today} value={date} onChange={(e)=>setdate(e.target.value)}/>
                </form>
            </div>
        </div>
    )
}

export default AddTask