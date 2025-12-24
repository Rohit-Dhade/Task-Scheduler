import React from 'react'
import { GrClose } from "react-icons/gr";
import { useState } from 'react';

const AddAssignment = ({ onClose }) => {
  // { id: 1, name: "Color Theory", date: "01 Feb 2025", score: "86/100", status: "Grade", checked: false },
  let today = new Date().toISOString().split('T')[0];
  const [AssignmentName, setAssignmentName] = useState("");
  const [date1, setdate] = useState("");
  const [score1, setscore] = useState("pending");
  const [status1, setstatus] = useState("")

  function resetForm() {
    let array = JSON.parse(localStorage.getItem('assignments'));

    let obj = {
      id: array.length + 1,
      name: AssignmentName,
      date: date1,
      score: score1,
      status: status1,
      checked: false,
    }

    array.push(obj);
    localStorage.setItem('assignments', JSON.stringify(array));
    console.log(date1, AssignmentName, score1,status1);
    setAssignmentName("");
    setdate("");
  }

  return (
    <div className='fixed inset-0 bg-black/70 backdrop-blur-lg flex justify-center items-center transition-all duration-300'>
      <div className='relative h-[70%] w-[35%] bg-white rounded-md'>
        <button onClick={onClose} className='absolute top-2 right-3'><GrClose /></button>
        <form onSubmit={(e) => { e.preventDefault(); resetForm() }} id='form-id' className='flex flex-col items-center justify-center gap-4 h-full'>
          <span className='text-2xl text-black font-bold'>Add Assignment</span>
          <input className='bg-white border-gray-500 w-[70%] rounded-md p-2 active:scale-98 hover:bg-gray-100 focus:outline-none focus:ring-0' required type="text" placeholder='Enter the Assignment name' value={AssignmentName} onChange={(e) => setAssignmentName(e.target.value)} />
          <input className='bg-white border-gray-500 w-[70%] rounded-md p-2 active:scale-98 hover:bg-gray-100 focus:outline-none focus:ring-0' type="text" placeholder='Enter Score' value={score1} onChange={(e) => setscore(e.target.value)} />
          <input className='bg-white border-gray-500 w-[70%] rounded-md p-2 active:scale-98 hover:bg-gray-100 focus:outline-none focus:ring-0' required type="date" placeholder='Enter Deadline date' min={today} value={date1} onChange={(e) => setdate(e.target.value)} />
          <select onChange={(e)=>setstatus(e.target.value)} className='border border-gray-500 rounded-md text-xs focus:outline-none focus:ring-0'>
            <option className='text-xs rounded-md' value="Grade">Grade</option>
            <option className='text-xs rounded-md' value="Todo">Todo</option>
          </select>
          <button type='submit' className='bg-purple-500 w-[40%] whitespace-nowrap rounded-md text-white p-1'>Add Assignment</button>
        </form>
      </div>
    </div>
  )
}

export default AddAssignment