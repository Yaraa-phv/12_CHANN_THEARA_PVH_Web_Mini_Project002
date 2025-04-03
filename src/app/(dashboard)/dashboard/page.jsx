
// import Breadcrumbs from "@/components/Breadcrumb";
// import Counter from "@/components/header";
// import { auth } from "../../../../auth";

import { redirect } from "next/navigation";
import { auth } from "../../../../auth"
import CardComponent from "@/components/card";
import TaskCard from "@/components/TaskCardComponent";
import { getAllTaskbyWorkspaceId } from "../../../../service/api-service";
import TopNav from "@/components/topnav";

export default async function HomePage({ workspaceId }) {

  const task = await getAllTaskbyWorkspaceId({workspaceId});


  return (

    <>
    <div className="w-full h-[100%] ">
      <div className="m-auto w-[90%] h-[15%]">
        <TopNav/>
      </div>

      <div className="m-auto w-[90%] h-[85%] grid grid-cols-4 gap-3 overflow-auto">
        <TaskCard/>
        {/* <CardComponent/> */}
      </div>
      </div>
    </>
  )
}