"use client";

import React, { useState, useEffect } from 'react';
import Logo from './logo';

export default function SidebarComponent({ workspaces }) {
  const favoriteItems = [
    { name: 'HRD Design', color: 'red' },
    { name: 'Website Design', color: 'blue' }
  ];

  const [colors, setColors] = useState([]);

  useEffect(() => {
    const newColors = [];
    for (let i = 0; i < 10; i++) {
      newColors.push("#" + Math.floor(Math.random() * 16777215).toString(16));
    }
    setColors(newColors);
  }, []); // Runs only once on component mount

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <Logo />
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-2">
          <h3 className="text-lg font-bold text-gray-500 mb-2">Workspace</h3>
          <ul className="space-y-1">
            {workspaces.payload.map((item, index) => (
              <li key={index}>
                <a 
                  href={`/dashboard/${item.workspaceId}`} 
                  className="flex items-center px-2 py-2 text-sm rounded-md bg-blue-50 text-blue-700"
                >
                  <span
                    style={{
                      width: "12px",  
                      height: "12px",
                      borderRadius: "50%",
                      backgroundColor: colors[index % colors.length] || "#ccc",
                      display: "inline-block",
                      marginRight: "10px",
                    }}
                  ></span>
                  {item.workspaceName}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-4 py-2 mt-6">
          <h3 className="text-lg font-bold text-gray-500 mb-2 flex justify-between items-center">
            Favorite
          </h3>
          <ul className="space-y-1">
            {favoriteItems.map((item, index) => (
              <li key={index}>
                <a href="#" className="flex items-center px-2 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                  <span
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      backgroundColor: colors[index % colors.length] || "#ccc",
                      display: "inline-block",
                      marginRight: "10px",
                    }}
                  ></span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center text-sm text-green-500 hover:text-green-700">
          Logout
        </button>
      </div>
    </div>
  );
}
