import React from 'react'
import SingleBar from './SingleBar'

const TaskProgress = () => {
    // const weeklyProgress = [
    //     { day: "M", fullDay: "Monday", progress: 70 },
    //     { day: "T", fullDay: "Tuesday", progress: 65 },
    //     { day: "W", fullDay: "Wednesday", progress: 100 },
    //     { day: "T", fullDay: "Thursday", progress: 40 },
    //     { day: "F", fullDay: "Friday", progress: 75 },
    //     { day: "S", fullDay: "Saturday", progress: 30 },
    //     { day: "S", fullDay: "Sunday", progress: 55 },
    // ];

    // localStorage.setItem('weekProgress' , JSON.stringify(weeklyProgress));
    const arrays = JSON.parse(localStorage.getItem("weekProgress"))
    // console.log(arrs);

    return (
        <div className="w-[70%] h-full px-2 flex flex-col gap-0 shadow-2xl">

            <div className='flex items-center justify-between mb-1'>
                <div className="font-bold flex items-center justify-center mt-0">
                    Task Progress
                </div>
                <div className='mt-0'>
                    <select className='text-xs' defaultValue='weeklyOption'>
                        <option value="weeklyOption">Weekly</option>
                        <option value="monthlyOption">Monthly</option>
                    </select>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto no-scrollbar">
                <div className="w-full h-full bg-gray-200 flex flex-col items-end justify-end gap-2 px-3">
                    {arrays.map((item, index) => (
                        <SingleBar key={index} weekProgress={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TaskProgress