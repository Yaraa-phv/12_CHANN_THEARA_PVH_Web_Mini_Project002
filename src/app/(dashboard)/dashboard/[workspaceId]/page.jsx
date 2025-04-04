import { getTasksByWorkspaceId } from "../../../../../service/api-service"
import CardComponent from "@/components/card";

export default async function HomePage({ params }) {
  const workspaceId = (await params).workspaceId;
  const tasks = await getTasksByWorkspaceId(workspaceId);

  return (
    <main className="overflow-x-auto grid grid-cols-3 gap-3 p-4">
      {tasks.payload.map((task) => (
        <CardComponent key={task.taskId} taskcard={task} />
      ))}

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
