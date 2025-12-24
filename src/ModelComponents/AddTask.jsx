import React from 'react'
import { GrClose } from "react-icons/gr";
import { useState } from 'react';

const AddTask = ({ onClose }) => {
    let today = new Date().toISOString().split('T')[0];
    const [date, setdate] = useState("");
    const [title, settitle] = useState("");
    const [subtitle, setsubtitle] = useState("");


    function resetForm(){
        let array = JSON.parse(localStorage.getItem('TaskProgress'));

        let obj = {
            id:array.length + 1,
            title: title,
            subtitle: subtitle,
            deadline: date,
            progress: 0,
            color: "bg-pink-500/65",
        }
        
        array.push(obj);
        localStorage.setItem('TaskProgress' , JSON.stringify(array));
        console.log(date , title , subtitle);
        setdate("");
        settitle("");
        setsubtitle("");
    }

    // console.log(array.length);

    return (
        <div className='fixed inset-0 bg-black/70 backdrop-blur-lg flex justify-center items-center transition-all duration-300'>
            <div className='relative h-[60%] w-[35%] bg-white'>
                <button onClick={onClose} className='absolute top-2 right-3'><GrClose /></button>
                <form onSubmit={(e)=>{e.preventDefault();resetForm()}} id='form-id' className='flex flex-col items-center justify-center gap-3 border-2 h-full'>
                    <span className='text-2xl text-black font-bold'>Add Task</span>
                    <input className='bg-white border-gray-500 w-[70%] rounded-md p-2 active:scale-98 hover:bg-gray-100 focus:outline-none focus:ring-0' required type="text" placeholder='Enter the task name' value={title} onChange={(e)=>settitle(e.target.value)} />
                    <input className='bg-white border-gray-500 w-[70%] rounded-md p-2 active:scale-98 hover:bg-gray-100 focus:outline-none focus:ring-0' required type="text" placeholder='Enter domain' value={subtitle} onChange={(e)=>setsubtitle(e.target.value)} />
                    <input className='bg-white border-gray-500 w-[70%] rounded-md p-2 active:scale-98 hover:bg-gray-100 focus:outline-none focus:ring-0' required type="date" placeholder='Enter Deadline date' min={today} value={date} onChange={(e)=>setdate(e.target.value)}/>
                    <button type='submit' className='bg-purple-500 w-[40%] whitespace-nowrap rounded-md text-white p-1'>Add Task</button>
                </form>
            </div>
        </div>
    )
}

export default AddTask