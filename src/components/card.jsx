import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Ellipsis } from "lucide-react";
import React from "react";

export default function CardComponent({ taskcard }) {
  // Tailwind-safe status color mapping
  const statusColorMap = {
    NOT_STARTED: 'red-500',
    IN_PROGRESS: 'blue-500',
    FINISHED: 'teal-500'
  };

  const getStatusColor = (status) => {
    return statusColorMap[status] || 'bg-gray-300';
  };

  return (
    <div className="border border-gray-200 rounded-xl bg-white shadow-md p-4 w-full h-fit">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold capitalize">{taskcard.taskTitle}</h2>
        <Ellipsis className="text-gray-400" />
      </div>

      {/* Details */}
      <p className="text-sm text-gray-600 line-clamp-2 h-12 mb-3">
        {taskcard.taskDetails}
      </p>

      {/* Tag and Status */}
      <div className="flex justify-between items-center mb-4">
        <span className="bg-purple-100 text-purple-600 text-sm py-1 px-3 rounded-full">
          {taskcard.tag}
        </span>
        <div className={`w-5 h-5 rounded-full bg-${getStatusColor(taskcard.status)}`} />
      </div>

      {/* Footer - Status & Date */}
      <div className="flex justify-between items-center border-t pt-3 border-gray-200 text-xs">
        {/* Status dropdown */}
        <Select>
          <SelectTrigger className={`w-36 border-gray-300 text-xs `}>
            <SelectValue placeholder={taskcard.status} />
          </SelectTrigger>
          <SelectContent className={``}>
            <SelectItem value="NOT_STARTED">NOT_STARTED</SelectItem>
            <SelectItem value="IN_PROGRESS">IN_PROGRESS</SelectItem>
            <SelectItem value="FINISHED">FINISHED</SelectItem>
          </SelectContent>
        </Select>

        {/* Date */}
        <div className="flex items-center text-gray-500 gap-2">
          <Clock size={15} />
          <span className="text-[10px]">
  {new Date(taskcard.endDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  })}
</span>
        </div>
      </div>
    </div>
  );
}
