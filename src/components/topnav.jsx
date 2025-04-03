"use client"

import { BellRing } from "lucide-react";
// import { Calendar } from "lucide-react";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const pathname = usePathname();
  const breadcrumbs = pathname.split('/').filter(Boolean);
  
  return (
    <div className="bg-white border-b border-gray-200 py-3 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <span className="text-gray-500">Workspace</span>
        {breadcrumbs.length > 0 && (
          <>
            <span className="mx-1">&gt; </span>
            <span className="text-blue-500">{breadcrumbs[breadcrumbs.length - 1]}</span>
          </>
        )}
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full cursor-pointer">
          <BellRing size={20} />
        </button>
        <div className="flex items-center cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium overflow-hidden">
            <img src="/api/placeholder/32/32" alt="User" className="w-full h-full object-cover" />
          </div>
          <div className="ml-2">
            <div className="text-sm font-medium">Monster</div>
            <div className="text-xs text-[#009990]">blackmonster@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}