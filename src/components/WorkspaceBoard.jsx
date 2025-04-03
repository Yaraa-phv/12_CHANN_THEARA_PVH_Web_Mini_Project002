"use client"

import React from 'react';
import TaskColumn from './TaskColumn';
// import TaskColumn from './TaskColumn';

export default function WorkspaceBoard() {
  // Static data for the task board
  const tasks = {
    'Not Started': [
      {
        title: 'Slack Integration',
        description: 'Add a field in the portal to let the user connect their Slack account.',
        category: 'Development',
        status: 'Not Started',
        dueDate: 'Tomorrow'
      },
      {
        title: 'Mini Project 001',
        description: 'Add a field in the portal to let the user connect their Slack account.',
        category: 'UX/UI Design',
        status: 'Not Started',
        dueDate: 'Mar 03, 2025'
      },
      {
        title: 'Slack Integration',
        description: 'Add a field in the portal to let the user connect their Slack account.',
        category: 'Development',
        status: 'Not Started',
        dueDate: 'Tomorrow'
      },
      {
        title: 'Mini Project 001',
        description: 'Add a field in the portal to let the user connect their Slack account.',
        category: 'UX/UI Design',
        status: 'Not Started',
        dueDate: 'Mar 03, 2025'
      }
    ],
    'In Progress': [
      {
        title: 'ReactJS Homework 003',
        description: 'Add a field in the portal to let the user connect their Slack account.',
        category: 'Web Homework',
        status: 'In Progress',
        dueDate: 'Mar 24, 2025'
      },
      {
        title: 'ReactJS Homework 003',
        description: 'Add a field in the portal to let the user connect their Slack account.',
        category: 'Web Homework',
        status: 'In Progress',
        dueDate: 'Mar 24, 2025'
      },
      {
        title: 'ReactJS Homework 003',
        description: 'Add a field in the portal to let the user connect their Slack account.',
        category: 'Web Homework',
        status: 'In Progress',
        dueDate: 'Mar 24, 2025'
      }
    ],
    'Finished': [
      {
        title: 'Data Fetching',
        description: 'Add a field in the portal to let the user connect their Slack account.',
        category: 'Web Homework',
        status: 'Finished',
        dueDate: 'Mar 23, 2025'
      },
      {
        title: 'Data Fetching',
        description: 'Add a field in the portal to let the user connect their Slack account.',
        category: 'Web Homework',
        status: 'Finished',
        dueDate: 'Mar 23, 2025'
      },
      {
        title: 'Data Fetching',
        description: 'Add a field in the portal to let the user connect their Slack account.',
        category: 'Web Homework',
        status: 'Finished',
        dueDate: 'Mar 23, 2025'
      }
    ]
  };

  return (
    // <>
    // <div className="fixed bottom-6 right-6 flex space-x-2">
    // //     <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 flex items-center shadow-md">
    // //       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    // //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    // //       </svg>
    // //       New Task
    // //     </button>
    // //     <button className="bg-white hover:bg-gray-100 text-gray-700 rounded-full p-2 shadow-md">
    // //       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    // //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
    // //       </svg>
    // //     </button>
    // //   </div>
    // </>
    <main className="flex-1 overflow-x-auto bg-gray-50">
      <div className="flex h-full border-t border-gray-200">
        <TaskColumn tasks={tasks['Not Started']}/>
        <TaskColumn tasks={tasks['In Progress']} />
        <TaskColumn tasks={tasks['Finished']} />
      </div>
      <div className="fixed bottom-6 right-6 flex space-x-2">
        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 flex items-center shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Task
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-700 rounded-full p-2 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </button>
      </div>
    </main>
  );
}
