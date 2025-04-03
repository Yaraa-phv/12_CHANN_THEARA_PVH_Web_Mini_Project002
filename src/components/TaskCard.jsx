"use client"

import React from 'react';
import StatusForCards from './StatusForCard';
// import StatusBadge from './StatusBadge';

export default function TaskCard({ task }) {
  
  const statusColorMap = {
    'Not Started': 'bg-red-500',
    'In Progress': 'bg-blue-500',
    'Finished': 'bg-teal-500'
  };
  

  return (
    <div className="bg-white rounded-md shadow-sm border border-gray-200 mb-4">
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-sm font-medium">{task.title}</h3>
          <button className="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
        </div>
        <p className="text-xs text-gray-500 mb-4">{task.description}</p>
        <div className="flex justify-between items-center">
          <StatusForCards status={task.category} />
          <div className={`h-4 w-4 rounded-full bg-${statusColorMap[task.status]}`}></div>
        </div>
      </div>
      <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between rounded-b-md">
        <div className="flex items-center text-sm text-gray-500">
          <div className={`flex items-center ${task.status === 'Not Started' ? 'text-gray-500' : ''}`}>
            <button className={`px-2 py-1 rounded text-xs ${task.status === task.columnType ? 'bg-gray-200' : 'hover:bg-gray-200'}`}>
              {task.status}
            </button>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {task.dueDate}
        </div>
      </div>
    </div>
  );
}
