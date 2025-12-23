import React, { useState, useEffect } from 'react'
import SingleAssignment from './SingleAssignment';

const Assignments = () => {

  const assign = [
    { id: 1, name: "Color Theory", date: "01 Feb 2025", score: "86/100", status: "Grade", checked: false },
    { id: 2, name: "System Design", date: "03 Feb 2025", score: "92/100", status: "Grade", checked: false },
    { id: 3, name: "UI Principles", date: "05 Feb 2025", score: "78/100", status: "Grade", checked: false },
    { id: 4, name: "React Basics", date: "07 Feb 2025", score: "Pending", status: "Todo", checked: false },
    { id: 5, name: "Database Modeling", date: "09 Feb 2025", score: "Pending", status: "Todo", checked: false },
    { id: 6, name: "UX Research", date: "11 Feb 2025", score: "88/100", status: "Grade", checked: false },
    { id: 7, name: "API Integration", date: "13 Feb 2025", score: "Pending", status: "Todo", checked: false },
    { id: 8, name: "Design Systems", date: "15 Feb 2025", score: "90/100", status: "Grade", checked: false },
    { id: 9, name: "Accessibility Audit", date: "17 Feb 2025", score: "85/100", status: "Grade", checked: false },
    { id: 10, name: "Performance Optimization", date: "19 Feb 2025", score: "Pending", status: "Todo", checked: false },
    { id: 11, name: "Testing Strategies", date: "21 Feb 2025", score: "89/100", status: "Grade", checked: false },
    { id: 12, name: "Deployment Pipeline", date: "23 Feb 2025", score: "91/100", status: "Grade", checked: false },
    { id: 13, name: "Final Project Review", date: "25 Feb 2025", score: "Pending", status: "Todo", checked: false },
  ];

  const [assignments, setAssignments] = useState(() => {
    const stored = localStorage.getItem("assignments");
    return stored ? JSON.parse(stored) : assign;
  });

  const doneTasks = assignments.filter(a => a.checked).length;
  console.log((doneTasks/assign.length) * 100);

  useEffect(() => {
    localStorage.setItem("assignments", JSON.stringify(assignments));
  }, [assignments]);

  return (
    <div className="h-full w-[40%] shadow-2xl overflow-auto no-scrollbar relative">

      <div className="sticky top-0 bg-white w-full p-1">
        <span className="font-bold flex gap-1 items-center">
          Assignments
          <span className="text-[10px] opacity-75">({assignments.length})</span>
        </span>

        <div className="flex items-center gap-1">
          <input type="checkbox" disabled />
          <span className="text-[10px] font-semibold opacity-60">
            {doneTasks}/{assignments.length} completed
          </span>
        </div>
      </div>

      <div className="flex flex-col p-2 gap-2">
        {assignments.map(item => (
          <SingleAssignment
            key={item.id}
            assignment={item}
            setAssignments={setAssignments}
          />
        ))}
      </div>

    </div>
  );
};

export default Assignments;
