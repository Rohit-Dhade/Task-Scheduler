import React from 'react'

const SingleBar = ({ weekProgress }) => {
    // const arrs = JSON.parse(localStorage.getItem("weekProgress"))
    // console.log(arrs);
    // console.log(weekProgress);
    return (
        <div className="flex items-center justify-between h-full gap-2 w-full">
            <span className="text-[10px] mt-0">{weekProgress.day}</span>
            <div className='bg-gray-300 rounded-md w-full'>
                <div
                    style={{ width: `${weekProgress.progress}%` }}
                    className="h-3 bg-[#55359F] rounded-md transition-all duration-500 flex items-center justify-end text-white"><span className="text-[8px] font-bold mr-3">{weekProgress.progress}%</span>
                </div>
            </div>
        </div >
    );
};

export default SingleBar