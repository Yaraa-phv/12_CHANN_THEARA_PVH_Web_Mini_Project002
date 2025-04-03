
// import Breadcrumbs from "@/components/Breadcrumb";
// import Counter from "@/components/header";
// import { auth } from "../../../../auth";

// import { redirect } from "next/navigation";
// import { auth } from "../../../../auth"
// import SidebarComponent from "@/components/SideBarComponent";
import HeaderCompoent from "@/components/HeaderComponent";
import WorkspaceBoard from "@/components/WorkspaceBoard";
// import { getUsers } from "../../../../service/api-service";

export default async function HomePage() {

  // const users = await getUsers();
  // console.log("User in page : ", users);


  return (

    <>
      {/* <div className="flex h-screen bg-gray-50">
      <SidebarComponent />
      <div className="flex-1 flex flex-col overflow-hidden"> */}
        
        <WorkspaceBoard />
      {/* </div>
    </div> */}
    </>
  )
}