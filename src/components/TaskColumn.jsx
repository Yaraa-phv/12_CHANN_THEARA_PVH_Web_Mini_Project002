"use client"

import React from 'react';
import TaskCard from './TaskCard';
// import TaskCard from './TaskCard';

export default function TaskColumn({ title, tasks }) {
  return (
    <div className="flex-1 min-w-0 p-4">
      <h2 className="text-lg font-medium text-gray-900 mb-4">{title}</h2>
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <TaskCard key={index} task={{...task, columnType: title}} />
        ))}
      </div>
    </div>
  );
}
