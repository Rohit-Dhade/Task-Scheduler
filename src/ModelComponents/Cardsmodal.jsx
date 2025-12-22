import React from 'react'
import { GrClose } from "react-icons/gr";

const Cardsmodal = ({ Task, onClose }) => {
    return (
        <div className='fixed inset-0 bg-black/70 backdrop-blur-lg flex justify-center items-center transition-all duration-300'>
            <div
                onClick={(e) => e.stopPropagation()}
                className='w-[35%] h-[65%] flex flex-col gap-3 bg-white items-center justify-center rounded-md relative'
            >
                <button onClick={onClose} className='absolute top-2 right-3'>
                    <GrClose />
                </button>

                <div className='flex flex-col gap-4 w-[70%]'>

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

                    <div className='flex items-center w-full justify-between overflow-auto no-scrollbar relative'>
                        <div className='flex flex-col items-start justify-center overflow-auto no-scrollbar h-full w-[50%]'>
                            <span className='flex gap-2'><input type="checkbox" /><h1>Task-1</h1></span>
                            <span className='flex gap-2'><input type="checkbox" /><h1>Task-2</h1></span>
                            <span className='flex gap-2'><input type="checkbox" /><h1>Task-3</h1></span>
                            <span className='flex gap-2'><input type="checkbox" /><h1>Task-4</h1></span>
                        </div>

                        <button className='absolute top-0 right-0 bg-purple-500 text-white text-[13px] p-1 rounded-md'>
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
