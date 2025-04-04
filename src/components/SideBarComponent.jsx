"use client";
import React, { useState, useRef, useEffect } from 'react';
import { AddCircle, CloseCircle } from 'iconsax-react';
import { usePathname } from 'next/navigation';
import Logo from './logo';

export default function SidebarComponent({ workspaces }) {
  const pathname = usePathname();
  const favoriteItems = [
    { name: 'HRD Design', color: 'red' },
    { name: 'Website Design', color: 'blue' }
  ];
  const [colors, setColors] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState('create'); // 'create' or 'update'
  const [formData, setFormData] = useState({ workspaceName: '' });
  const popupRef = useRef(null);
  const buttonRef = useRef(null);
  const [selectedWorkspace, setSelectedWorkspace] = useState(null);

  useEffect(() => {
    const newColors = [];
    for (let i = 0; i < 10; i++) {
      newColors.push("#" + Math.floor(Math.random() * 16777215).toString(16));
    }
    setColors(newColors);
  }, []);

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target) && 
          buttonRef.current && !buttonRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef]);

  const handleAddIconClick = (e, item, index) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Store reference to the clicked button
    buttonRef.current = e.currentTarget;
    
    // Set popup type and data based on context
    if (item) {
      setPopupType('update');
      setSelectedWorkspace(item);
      setFormData({ workspaceName: item.workspaceName });
    } else {
      setPopupType('create');
      setFormData({ workspaceName: '' });
    }
    
    setShowPopup(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (popupType === 'create') {
      console.log("Creating new workspace:", formData.workspaceName);
      // Add logic to create new workspace
    } else {
      console.log("Updating workspace:", selectedWorkspace?.workspaceId, "to", formData.workspaceName);
      // Add logic to update workspace
    }
    
    setShowPopup(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-2">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-bold text-gray-500">Workspace</h3>
            <button 
              onClick={(e) => handleAddIconClick(e)}
              className="focus:outline-none"
            >
              <AddCircle size={18} color="black" />
            </button>
          </div>
          <ul className="space-y-1">
            {workspaces?.payload?.map((item, index) => {
              const isActive = pathname === `/dashboard/${item.workspaceId}`;
              return (
                <li key={index}>
                  <a
                    href={`/dashboard/${item.workspaceId}`}
                    className={`flex items-center justify-between px-2 py-2 text-sm rounded-md transition-colors ${
                      isActive
                        ? "bg-blue-100 text-blue-700 font-semibold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center">
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
                    </div>
                    <button 
                      onClick={(e) => handleAddIconClick(e, item, index)}
                      className="focus:outline-none"
                    >
                      <AddCircle size={15} color={isActive ? 'blue' : 'black'} />
                    </button>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="px-4 py-2 mt-6">
          <h3 className="text-lg font-bold text-gray-500 mb-2 flex justify-between items-center">
            Favorite
          </h3>
          <ul className="space-y-1">
            {favoriteItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center justify-between px-2 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100"
                >
                  <div className="flex items-center">
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
                  </div>
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

      {/* Popup Form - Styled to match the image */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50">
          <div 
            ref={popupRef}
            className="bg-white rounded-lg shadow-lg border border-purple-400 p-4 w-full max-w-md mx-4"
            style={{ borderWidth: '2px' }}
          >
            <div className="mb-6 flex justify-between items-center">
              <h3 className="text-xl font-medium text-gray-800">
                {popupType === 'create' ? 'Create New Workspace' : 'Update Workspace'}
              </h3>
              <button 
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                <CloseCircle size={22} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <input
                  type="text"
                  name="workspaceName"
                  value={formData.workspaceName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-purple-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-400"
                  placeholder={popupType === 'create' ? "Please type your workspace name" : ""}
                  required
                />
              </div>
              
              <div className="flex justify-end">
                {popupType === 'create' ? (
                  <button
                    type="submit"
                    className="px-6 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 focus:outline-none"
                  >
                    Create
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-6 py-2 text-teal-600 border border-teal-600 rounded-md hover:bg-teal-50 focus:outline-none"
                  >
                    Update
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// function Logo() {
//   return (
//     <div className="text-xl font-bold">Dashboard</div>
//   );
// }