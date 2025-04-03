"use client"

import { useState } from "react";
import { Link, LogOut, MoreHorizontal, Plus, Star } from "lucide-react";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import { Button } from "./ui/button";

export default function Sidebar({ }) {

  //static data
  const wp = [
    {
      id: 1,
      name: "Mini Web Project",
      src: "",
      href: "/login",
    },
    {
      id: 2,
      name: "Mini Spring Project",
      src: "",
      href: "/",
    },
    {
      id: 3,
      name: "Mini Java Project",
      src: "",
      href: "/",
    },
    {
      id: 1,
      name: "Mini Web Project",
      src: "",
      href: "/login",
    },
    {
      id: 2,
      name: "Mini Spring Project",
      src: "",
      href: "/",
    },
    {
      id: 3,
      name: "Mini Java Project",
      src: "",
      href: "/",
    },
  ]

  const colors = [];

  for (let i = 0; i < 10; i++) {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    colors.push(randomColor);
  }

  // const [loading, setLoading] = useState(true);
  // const pathname = usePathname();
  // if (loading) {
  //   return <div className="w-64 bg-white border-r border-gray-200 p-6">Loading...</div>;
  // }
  return (
    <>
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 pl-15">
          <Logo />
        </div>

        {/* Workspace Section */}
        <div className="px-4 py-2 ">
          <div className="flex items-center justify-between mb-2 text-gray-500">
            <h2 className="text-xl font-bold">Workspace</h2>
            <Button className="cursor-pointer border border-gray shadow-sm w-2 h-6"><Plus size={15} /></Button>
          </div>
          <div className="w-full h-[60%] overflow-hidden">
            <ul className="space-y-3 text-sm">
              {wp.map((workspace, index) => {
                return (
                  <li key={workspace.id} className="flex justify-between">
                    {/* <Link
                    href={`/workspace/${workspace.id}`}
                    className={`flex items-center justify-between p-2 rounded ${isActive ? 'bg-gray-100 text-blue-600' : 'hover:bg-gray-100'
                      }`}
                  > */}
                    <div className="flex items-center">
                      <span
                        style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          backgroundColor: colors[index % colors.length],
                          display: "inline-block",
                          marginRight: "10px",
                        }}
                      ></span>
                      <span>{workspace.name}</span>
                    </div>
                    {/* <a> */}
                    <MoreHorizontal size={16} />
                    {/* </a> */}
                    {/* </Link> */}
                  </li>
                )
              })}
              {/* {Array.isArray(workspaces) && workspaces.map((workspace)  => {
            const isActive = pathname.includes(`/workspace/${workspace.workspaceId}`);
            return (
              <li key={workspace.workspaceId}>
                <Link 
                  href={`/workspace/${workspace.workspaceId}`}
                  className={`flex items-center justify-between p-2 rounded ${
                    isActive ? 'bg-gray-100 text-blue-600' : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-2 h-2 rounded-full bg-${workspace.colorClass} mr-2`}></div>
                    <span>{workspace.workspaceName}</span>
                  </div>
                  <MoreHorizontal size={16} />
                </Link>
              </li>
            );
          })} */}
            </ul>
          </div>
        </div>

        {/* Favorite Section */}
        <div className="px-4 py-2 mt-4">
          <div className="flex items-center justify-between mb-2 text-gray-500">
            <h2 className="text-xl font-bold">Favorite</h2>
            <Star size={18} className="cursor-pointer" />
          </div>

          {/* <ul className="space-y-2">
          {favorites.map(favorite => {
            const isActive = pathname.includes(`/workspace/${favorite.id}`);
            return (
              <li key={favorite.id}>
                <Link 
                  href={`/workspace/${favorite.id}`}
                  className={`flex items-center justify-between p-2 rounded ${
                    isActive ? 'bg-gray-100 text-blue-600' : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-2 h-2 rounded-full bg-${favorite.colorClass} mr-2`}></div>
                    <span>{favorite.name}</span>
                  </div>
                  <MoreHorizontal size={16} />
                </Link>
              </li>
            );
          })}
        </ul> */}
        </div>

        {/* Logout */}
        <div className="mt-auto px-4 py-6">
          <button className="flex items-center text-green-500 px-2 py-1">
            <LogOut size={18} className="mr-2" />
            Logout
          </button>
        </div>
      </div>
    </>
    // <div className="px-4 py-2 mt-4">
    //   <div className="flex items-center justify-between mb-2 text-gray-500">
    //     <h2 className="text-sm font-medium">Favorite</h2>
    //   </div>

    //   <ul className="space-y-2">
    //     {updatedFavorites.map((favorite) => (
    //       <li key={favorite.id} className="flex items-center justify-between p-2 rounded hover:bg-gray-100">
    //         <span>{favorite.name}</span>
    //         <button onClick={() => toggleFavorite(favorite.id, favorite.isFavorite)}>
    //           <Star
    //             size="20"
    //             color={favorite.isFavorite ? "#FFD700" : "#A0AEC0"} // Yellow when active, gray when inactive
    //             variant={favorite.isFavorite ? "Bold" : "Outline"} // Filled when active, outlined when inactive
    //           />
    //         </button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}
