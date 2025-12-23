import React from 'react'
import { GrClose } from "react-icons/gr";
import { useState, useEffect } from 'react';

const Cardsmodal = ({ index, Task, onClose }) => {

    const taskprogress = JSON.parse(localStorage.getItem('TaskProgress'))
    // taskprogress[1].progress = 40;

    const [subTask, setsubTask] = useState(() => {
        const stored = localStorage.getItem(`SubTaskProgress${index}`);
        return stored ? JSON.parse(stored) : [];
    });


    useEffect(() => {
        localStorage.setItem(`SubTaskProgress${index}`, JSON.stringify(subTask));
    }, [subTask]);

    const AddSubTask = () => {
        setsubTask(prev => [...prev, { id: prev.length + 1, done: false }]);
    }

    const [progress, setprogress] = useState(0);

    useEffect(() => {
        const prog =
            subTask.length === 0
                ? 0
                : Math.round(
                    (subTask.filter(t => t.done).length / subTask.length) * 100
                );

        setprogress(prog);

        const taskprogress = JSON.parse(localStorage.getItem('TaskProgress'));
        if (taskprogress[index]) {
            taskprogress[index].progress = prog;
            localStorage.setItem('TaskProgress', JSON.stringify(taskprogress));
        }
    }, [subTask, index]);


    function UpdateStatus(id) {
        setsubTask(prev => prev.map(task =>
            task.id === id ? { ...task, done: !task.done } : task
        ))
    }


    return (
        <div className='fixed inset-0 bg-black/70 backdrop-blur-lg flex justify-center items-center transition-all duration-300'>
            <div
                onClick={(e) => e.stopPropagation()}
                className='w-[35%] h-[65%] flex flex-col gap-3 bg-white items-center justify-center rounded-md relative'
            >
                <button onClick={onClose} className='absolute top-2 right-3'>
                    <GrClose />
                </button>

                <div className='flex flex-col gap-4 w-[70%] h-[90%]'>

                    <div className='flex items-center justify-between'>
                        <p className='text-[14px] opacity-55 whitespace-nowrap'>
                            {Task.deadline}
                        </p>
                        <span className={`rounded-xl flex items-center justify-center w-[40%] whitespace-nowrap text-[12px] ${Task.color}`}>
                            {Task.daysleft} days left
                        </span>
                    </div>

                    <div className='flex flex-col'>
                        <h2 className='font-bold text-2xl'>{Task.title}</h2>
                        <p className='text-[13px] opacity-65'>{Task.subtitle}</p>
                    </div>

                    <div className='relative flex w-full h-[90%] justify-between overflow-hidden'>
                        <div className='flex flex-col gap-2 mt-0 overflow-auto no-scrollbar w-[50%]'>
                            {subTask.map(item => (
                                <span key={item.id} className='flex gap-2'>
                                    <input onChange={() => UpdateStatus(item.id)} type="checkbox" checked={item.done} />
                                    <h1>Task-{item.id}</h1>
                                </span>
                            ))}
                        </div>
                        <button
                            onClick={AddSubTask}
                            className='absolute top-0 right-0 bg-purple-500 text-white text-[13px] p-1 rounded-md active:scale-95 hover:bg-purple-700'
                        >
                            Add Tasks
                        </button>
                    </div>

                    <div className='flex flex-col gap-4 w-full'>
                        <div className='bg-gray-300 rounded-lg h-2'>
                            <div
                                style={{ width: `${Task.progress}%` }}
                                className={`h-2 rounded-lg ${Task.color}`}
                            />
                        </div>

                        <div className='flex text-[13px] items-center justify-between w-full'>
                            <h1>Progress</h1>
                            <h1>{Task.progress}%</h1>
                        </div>

                        <hr className="border-dashed border-gray-400 mb-0" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cardsmodal
