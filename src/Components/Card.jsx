import React from 'react'
import { useState } from 'react';
import CardModal from '../ModelComponents/CardModal';

const Card = ({onOpen ,Task}) => {
    // console.log(Task);
    // const [openTask, setopenTask] = useState(false);

    return (
        <>
            <div onClick={onOpen} className='bg-white shadow-2xl min-w-45 max-w-190 h-[95%] rounded-2xl border border-gray-400 flex flex-col items-center flex-shrink-0'>
            <div className='w-[85%] flex flex-col gap-1 relative'>
                <div className='flex items-center justify-between mt-1'>
                    <p className='text-[10px] opacity-55'>{Task.deadline}</p>
                    <span className={`rounded-xl flex items-center justify-center w-[40%] whitespace-nowrap text-[9px] ${Task.color}`}>{Task.daysleft} days left</span>
                </div>
                <div className='flex flex-col'>
                    <h2 className='font-bold'>{Task.title}</h2>
                    <p className='text-[10px] opacity-65'>{Task.subtitle}</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='bg-gray-300 rounded-lg'>
                        <div  style={{ width: `${Task.progress}%` }} className={`h-1 rounded-lg ${Task.color}`}></div>
                    </div>
                    <div className='flex text-[11px] items-center justify-between w-full'>
                        <h1>Progress</h1>
                        <h1>{Task.progress}%</h1>
                    </div>
                    <hr className="border-dashed border-gray-400  mb-0" />
                </div>
                {/* <span className='absolute right-1 top-27.5 bg-pink-500/65 rounded-xl flex items-center justify-center w-[35%] whitespace-nowrap text-[9px]'>0 days left</span> */}
            </div>
        </div>
        {/* {openTask && <CardModal onClose={()=>setopenTask(false)}/>} */}
        </>
    )
}

export default Card