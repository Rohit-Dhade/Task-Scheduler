import { useState } from "react";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => {

    const printdata = ()=>{
        console.log('This is for presentation purpose');
    }

    const [currentDate, setCurrentDate] = useState(new Date());

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const prevMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
    };

    return (
        <div className="w-[90%] h-[50%] bg-[#F1EEF5] rounded-lg p-2 shadow-2xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <button onClick={prevMonth} className="text-sm">◀</button>
                <h2 className="font-semibold">
                    {currentDate.toLocaleString("default", { month: "long" })} {year}
                </h2>
                <button onClick={nextMonth} className="text-sm">▶</button>
            </div>

            {/* Days */}
            <div className="grid grid-cols-7 text-center text-xs text-gray-500 mb-2 ">
                {days.map((day) => (
                    <div key={day}>{day}</div>
                ))}
            </div>

            {/* Dates */}
            <div onClick={printdata} className="grid grid-cols-7 gap-1 text-center text-sm">
                {[...Array(firstDay)].map((_, i) => (
                    <div key={`empty-${i}`}></div>
                ))}

                {[...Array(daysInMonth)].map((_, i) => {
                    const isToday =
                        i + 1 === new Date().getDate() &&
                        month === new Date().getMonth() &&
                        year === new Date().getFullYear();

                    return (
                        <div
                            key={i}
                            className={`p-2rounded cursor-pointer transition ${isToday ? "bg-[#55359F] text-white font-semibold rounded-md" : "hover:bg-purple-100"}`}
                        >
                            {i + 1}
                        </div>
                    );

                    
                })}
            </div>
        </div>
    );
};

export default Calendar;
