import React from 'react'
import Main from './Components/Main'
import CardForTask from './Components/CardForTask'
import TaskProgress from './Components/TaskProgress'
import Assignments from './Components/Assignments'
import BasicDateCalendar from './Components/Calendar'
import Photo from './assets/Photo.jpg'

const App = () => {
  return (
    <div className='bg-[#DBD4F6] h-screen w-screen flex items-center justify-center gap-1'>
      <div className='bg-white h-[98%] w-[95%] shadow-2xl rounded-lg flex gap-2'>
        <div className='w-full'>
          <Main />
          <CardForTask />
          <div className='flex w-full h-[46%] items-center justify-between gap-2'>
            <TaskProgress />
            <Assignments />
          </div>
        </div>
        <div className='w-[35%] h-full rounded-lg mr-2 bg-[#C8B7EB] flex flex-col items-center justify-start pt-2 gap-3'>
          <div className='flex gap-3 items-center'>
            <img src={Photo} alt="" className='aspect-square w-8 h-8 rounded-full' />
            <div className="flex flex-col items-center justify-center leading-tight">
              <span className="text-lg font-semibold text-[#321E59]">Rohit Dhade</span>
              <span className="-mt-2 text-xs text-[#55359F]">Learner</span>
            </div>
          </div>
          <BasicDateCalendar />
        </div>
      </div>
    </div>
  )
}

export default App