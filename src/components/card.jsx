import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Ellipsis } from "lucide-react";
import React from "react";
import { getTasksByWorkspaceId } from "../../service/api-service";

export default async function CardComponent({ workspaceId }) {
  const task = await getTasksByWorkspaceId(workspaceId);
  const statusColorMap = {
    'NOT_STARTED': 'bg-red-500',
    'IN_PROGRESS': 'bg-blue-500',
    'FINISHED': 'bg-teal-500'
  };

  return (
    // {tasks.map((task) => (
    <div className="border border-gray-300 rounded-xl ml-4 py-4 w-[90%]">
      {task.payload.map((taskcard) => {
        return (
          <>
          <div key={taskcard.taskId}>
            <div  className="p-5">
              <div className="flex justify-between">
                <h2 className="text-lg font-bold capitalize">{taskcard.taskTitle}</h2>
                <Ellipsis />
              </div>

              {/* task detials */}
              <p className="line-clamp-2 text-sm text-light-steel-blue my-2 h-12">
                {taskcard.taskDetails}
              </p>

              <div className="flex justify-between items-center mt-4">
                {/* tag */}
                <p className="bg-purple-100 text-sm text-purple-500 py-1.5 px-3 rounded-lg">
                  {taskcard.tag}
                </p>

                {/* status */}
                <div className={`rounded-full w-8 h-8 bg-watermelon-red`}></div>
              </div>
            </div>

            {/* progress */}
            <div className="flex justify-between text-xs items-center border-t border-t-gray-300 p-5">
              <Select>
                <SelectTrigger
                  className={`w-36 truncate border-watermelon-red bg-${statusColorMap[taskcard.status]}`}
                >
                  <SelectValue placeholder={`${taskcard.status}`} />
                </SelectTrigger>
                <SelectContent className={`text-xs`}>
                  <SelectItem value="NOT_STARTED">NOT_STARTED</SelectItem>
                  <SelectItem value="IN_PROGRESS">IN_PROGRESS</SelectItem>
                  <SelectItem value="FINISHED">FINISHED</SelectItem>
                </SelectContent>
              </Select>

              {/* date */}
              <p className="flex gap-3 text-xs text-light-steel-blue">
                <Clock size={22} /> {taskcard.endDate}
              </p>
            </div>
            </div>
          </>
        )
      })}

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
    </div>
    // ))}

  );
}
