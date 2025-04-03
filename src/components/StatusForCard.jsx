"use client"

import React from 'react';

export default function StatusForCards({ status }) {
  const statusStyles = {
    'Not Started': 'bg-red-100 text-red-800 border-red-200',
    'In Progress': 'bg-blue-100 text-blue-800 border-blue-200',
    'Finished': 'bg-teal-100 text-teal-800 border-teal-200',
    'Development': 'bg-purple-100 text-purple-800 border-purple-200',
    'Web Homework': 'bg-blue-100 text-blue-800 border-blue-200',
    'UX/UI Design': 'bg-red-100 text-red-800 border-red-200'
  };

  return (
    <span className={`px-2 py-1 text-xs rounded ${statusStyles[status] || 'bg-gray-100 text-gray-800'}`}>
      {status}
    </span>
  );
}
