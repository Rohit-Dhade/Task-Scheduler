import React from 'react'
import Card from './Card'
import moment from 'moment';
import { useState } from 'react';
import CardModal from '../ModelComponents/CardModal';

const CardForTask = () => {

    const [selectedTask, setselectedTask] = useState(null);
    const [selectedIndex, setselectedIndex] = useState(null);

    function SelectedTaskIndex(Task, index){
        setselectedIndex(index);
        setselectedTask(Task);
    }

    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];

    function daysBetweenDates(date1, date2) {

        // Create moment object for the start date.
        const startMoment = moment(date1);

        // Create moment object for the end date.
        const endMoment = moment(date2);

        // using the diff() method with 'days' as 
        // the second parameter.
        // This method returns the difference between 
        // the two moments in days.

        const daysDifference =
            endMoment.diff(startMoment, 'days');
        return daysDifference;
    }

    // let tasks = [
    //     {
    //         id: 1,
    //         title: "Web Design",
    //         subtitle: "Designing",
    //         deadline: "2026-02-05",
    //         progress: 0,
    //         color: "bg-pink-500/65",
    //     },
    //     {
    //         id: 2,
    //         title: "UI Dashboard",
    //         subtitle: "Frontend Development",
    //         deadline: "2026-02-07",
    //         progress: 0,
    //         color: "bg-blue-500/65",
    //     },
    //     {
    //         id: 3,
    //         title: "Mobile App",
    //         subtitle: "App Designing",
    //         deadline: "2026-02-10",
    //         progress:  0,
    //         color: "bg-purple-500/65",
    //     },
    //     {
    //         id: 4,
    //         title: "Landing Page",
    //         subtitle: "Web Designing",
    //         deadline: "2026-02-03",
    //         progress: 0,
    //         color: "bg-green-500/65",
    //     },
    //     {
    //         id: 5,
    //         title: "Admin Panel",
    //         subtitle: "System Design",
    //         deadline: "2026-02-12",
    //         progress: 0,
    //         color: "bg-yellow-500/65",
    //     },
    //     {
    //         id: 6,
    //         title: "Portfolio Website",
    //         subtitle: "UI / UX Design",
    //         deadline: "2026-02-15",
    //         progress: 0,
    //         color: "bg-indigo-500/65",
    //     },
    //     {
    //         id: 7,
    //         title: "E-commerce App",
    //         subtitle: "Web Development",
    //         deadline: "2026-02-18",
    //         progress: 0,
    //         color: "bg-red-500/65",
    //     },
    // ];

    // localStorage.setItem("TaskProgress", JSON.stringify(tasks));
    let Tasks = JSON.parse(localStorage.getItem("TaskProgress"))

    Tasks = (Tasks.map(task => ({
        ...task, daysleft: daysBetweenDates(formattedDate, task.deadline),
    })))

    localStorage.setItem("TaskProgress", JSON.stringify(Tasks));

    const arrays = JSON.parse(localStorage.getItem("TaskProgress"))
    return (
        <>
            <div className='bg-white flex gap-2 justify-start items-center h-[26%] max-w-173 overflow-auto no-scrollbar ml-2'>
                {arrays.map((item,index) => (
                    <Card key={item.id} Task={item} onOpen={() => SelectedTaskIndex(item ,index)} />
                    // console.log(item
                ))}
            </div>
            {selectedTask && <CardModal onClose={() => setselectedTask(null)} Task={selectedTask} taskindex = {selectedIndex}/>}
        </>
    )
}

export default CardForTask