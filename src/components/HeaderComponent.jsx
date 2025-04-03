"use client"
import React from 'react';

export default function HeaderCompoent({ user }) {
  // console.log("user",user)
  // const user = user.payload;
  return (
    <>
    {/* Top navigation bar */}
    <div className="border-b border-gray-200 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Workspace</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-sm text-blue-500 font-medium">HRD Design</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>

        
            <div key={user.payload.userId} className="flex items-center">
            <img src={`${user.payload.profile}`} className='h-8 w-8 rounded-full text-white flex items-center justify-center mr-2'></img>
            <div className="text-sm">
              <div className="font-medium">{user.payload.username}</div>
              <div className="text-xs text-green-400">{user.payload.email}</div>
            </div>
          </div>
     
          
        </div>
      </div>
      
      {/* Title section */}
      <div className="px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">HRD Design</h1>
        <button className="text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </button>
      </div>
      
      {/* Tab navigation */}
      <div className="flex">
        <div className="flex-1">
          <button className="relative text-left ml-4 py-4 text-sm font-medium text-red-500 w-full">
            Not Started
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 w-[90%]"></div>
          </button>
        </div>
        <div className="flex-1">
          <button className="relative text-left ml-3 py-4 text-sm font-medium text-blue-500 w-full">
            In Progress
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500  w-[90%]"></div>
          </button>
        </div>
        <div className="flex-1">
          <button className="relative text-left ml-2 py-4 text-sm font-medium text-teal-500 w-full">
            Finished
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500  w-[90%]"></div>
          </button>
        </div>
      </div>
    </>
    // <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
    //   <div className="flex items-center space-x-4">
    //     <h1 className="text-xl font-bold">HRD Design</h1>
    //     <button className="p-1">
    //       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
    //         <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
    //       </svg>
    //     </button>
    //   </div>
    //   <div className="flex items-center space-x-4">
    //     <button className="p-1">
    //       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    //       </svg>
    //     </button>
    //     <div className="flex items-center">
    //       <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center">M</div>
    //       <div className="ml-2 text-sm text-gray-700">
    //         <div>Monster</div>
    //         <div className="text-xs text-gray-500">hidemonster@gmail.com</div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  );
}
