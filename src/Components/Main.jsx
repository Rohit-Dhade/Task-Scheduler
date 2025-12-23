import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import task from '../assets/task.png'

const Main = () => {
    return (
        <div>
            <div className='w-full flex flex-col gap-2 px-2'>
                <div className='flex items-center justify-between w-full'>
                    <div>
                        <h2 className='font-bold'>Hi, Rohit Dhade</h2>
                        <h4 className='text-purple-500 text-xs -mt-1.5'>Let's finish your task today!</h4>
                    </div>
                    <div><IoIosNotificationsOutline size={30} /></div>
                </div>
                <div className='bg-[#E2EEF0] rounded-lg flex w-full items-center gap-70 px-3'>
                    <div className='flex items-start justify-start flex-col gap-1.5 w-[30%]'>
                        <span className='font-bold text-2xl whitespace-nowrap'>Today's Task</span>
                        <span className='text-gray-700 opacity-70 whitespace-nowrap text-[13px] -mt-2'>Check your daily tasks and schedule</span>
                        <button className='w-full bg-[#55359F] text-white rounded-lg whitespace-nowrap text-[14px] mb-1.5'>Today's Schedule</button>
                    </div>
                    <div className='w-[12%]'>
                        <img className='bg-blend-multiply object-cover' src={task} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main