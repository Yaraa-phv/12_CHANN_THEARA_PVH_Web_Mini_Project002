import WorkspaceBoard from "@/components/WorkspaceBoard";
import { getTasksByWorkspaceId } from "../../../../../service/api-service"
import CardComponent from "@/components/card";

export default async function HomePage({ params }) {

  const workspaceId = (await params).workspaceId;
  // console.log("workspaceId ", workspaceId);
  // const task = await getTasksByWorkspaceId(workspaceId);
  // console.log("tasks ", task);


  return (

    <>

      <main className="flex-1 overflow-x-auto grid grid-cols-3 gap-3">
        {/* <div className="border-t border-gray-200 bg-red-900"> */}
          <CardComponent workspaceId = {workspaceId}/>
        {/* <WorkspaceBoard /> */}

          {/* <TaskColumn tasks={tasks['Not Started']} />
          <TaskColumn tasks={tasks['In Progress']} />
          <TaskColumn tasks={tasks['Finished']} /> */}
        {/* </div> */}

        </main>

      {/* <WorkspaceBoard workspaceId={params}/> */}
    </>
  )
}