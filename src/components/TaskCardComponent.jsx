"use client"

import { Calendar, ChevronDown, MoreHorizontal } from "lucide-react";

export default function TaskCard({ }) {

  const task = [
    {
      taskId: 1,
      taskTitle: "Spring Security",
      taskDetails: "asdfghjk",
      tag: "CREATED",
      status: "finished",
      endDate: "Today",
    },
    {
      taskId: 2,
      taskTitle: "Spring Security",
      taskDetails: "asdfghjk",
      tag: "CREATED",
      status: "notStarted",
      endDate: "Today",
    },
    {
      taskId: 3,
      taskTitle: "Spring Security",
      taskDetails: "asdfghjk",
      tag: "CREATED",
      status: "inProgress",
      endDate: "Today",
    },
    {
      taskId: 4,
      taskTitle: "Spring Security",
      taskDetails: "asdfghjk",
      tag: "CREATED",
      status: "finished",
      endDate: "Today",
    },
    {
      taskId: 5,
      taskTitle: "Spring Security",
      taskDetails: "asdfghjk",
      tag: "CREATED",
      status: "notStarted",
      endDate: "Today",
    },
    {
      taskId: 6,
      taskTitle: "Spring Security",
      taskDetails: "asdfghjk",
      tag: "CREATED",
      status: "inProgress",
      endDate: "Today",
    },
  ]

  const statusColors = {
    notStarted: 'red-500',
    inProgress: 'blue-500',
    finished: 'green-500'
  };

  const statusLabels = {
    notStarted: 'Not Started',
    inProgress: 'In Progress',
    finished: 'Finished'
  };

  return (
    <>
      {task.map((task) => {
        return (
          <div key={task.taskId} className="bg-white rounded shadow-sm border border-gray-200 mb-4">
            <div className="p-4">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-medium">{task.taskTitle}</h4>
                <MoreHorizontal size={16} className="text-gray-400" />
              </div>
              <p className="text-sm text-gray-500 mb-4">{task.taskDetails}</p>

              <div className="flex items-center mb-4">
                <span className={`text-xs bg-gray-500 text-black px-2 py-1 rounded`}>
                  {task.tag}
                </span>
                <div className={`ml-auto w-6 h-6 rounded-full bg-red-300`}></div>
              </div>

              <div className="flex items-center justify-between">
                <div className={`flex items-center space-x-1 text-${statusColors[task.status]} text-sm`}>
                  <span>{statusLabels[task.status]}</span>
                  <ChevronDown size={16} />
                </div>

                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar size={14} className="mr-1" />
                  <span>{task.endDate}</span>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  );
}