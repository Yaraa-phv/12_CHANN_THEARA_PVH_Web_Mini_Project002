import WorkspaceBoard from "@/components/WorkspaceBoard";
import { getTasksByWorkspaceId } from "../../../../../service/api-service"
import CardComponent from "@/components/card";

export default async function HomePage({ params }) {

  const workspaceId = (await params).workspaceId;
  // console.log("workspaceId ", workspaceId);
  const task = await getTasksByWorkspaceId(workspaceId);
  // console.log("tasks ", task);


  return (

    <>

      <main className="flex-1 overflow-x-auto bg-gray-50">
        <div className="flex h-full border-t border-gray-200">
          {/* <CardComponent tasks={task}/> */}
          {/* <TaskColumn tasks={tasks['Not Started']} />
          <TaskColumn tasks={tasks['In Progress']} />
          <TaskColumn tasks={tasks['Finished']} /> */}
        </div>

        <WorkspaceBoard />
        </main>

      {/* <WorkspaceBoard workspaceId={params}/> */}
    </>
  )
}