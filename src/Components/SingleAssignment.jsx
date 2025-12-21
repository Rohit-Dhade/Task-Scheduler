import React from 'react'

const SingleAssignment = ({ assignment, setAssignments }) => {
    // const arrs = JSON.parse(localStorage.getItem("Assignments"))
    const AddOrRemoveTask = (e) => {
        setAssignments(prev =>
            prev.map(item =>
                item.id === assignment.id
                    ? { ...item, checked: !item.checked }
                    : item
            )
        );
    }
    return (
        <div className='flex justify-between items-center shadow-2xl bg-amber-100 p-1 rounded-lg shrink-0'>
            <div className='flex items-center gap-2 '>
                <input onChange={AddOrRemoveTask} type="checkbox" checked={assignment.checked} className='accent-blue-300 w-4 h-4' />
                <div>
                    <h2 className='text-[10px]'>{assignment.name}</h2>
                    <h4 className='text-[8px]'>{assignment.date}</h4>
                </div>
            </div>
            <div className='flex flex-col items-end'>
                <h2 className='text-[10px] font-semibold'>{assignment.score}</h2>
                <h4 className='text-[8px]'>{assignment.status}</h4>
            </div>
        </div>
    )
}

export default SingleAssignment