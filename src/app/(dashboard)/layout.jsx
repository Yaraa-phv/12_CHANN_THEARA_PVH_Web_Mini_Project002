import HeaderCompoent from "@/components/HeaderComponent";
import { getUsers, getWorkspaces } from "../../../service/api-service";
import "../globals.css";
import SidebarComponent from "@/components/SideBarComponent";
// import { useState } from "react";

export default async function DashboardLayout({ children }) {
  const workspace = await getWorkspaces();
  const users = await getUsers();
  
  // const [selectedWorkspace, setSelectedWorkspace] = useState(workspace.payload[0]); // Default to the first workspace

  // const handleWorkspaceSelect = (workspaceName) => {
  //   const selected = workspace.payload.find(ws => ws.workspaceName === workspaceName);
  //   setSelectedWorkspace(selected); // Update the selected workspace
  // };

  return (
    <>
      <html lang="en">
        <body>
          <div className="flex h-screen bg-gray-50">
            <SidebarComponent 
              workspaces={workspace} 
              // onWorkspaceSelect={handleWorkspaceSelect} 
            />
            <div className="flex-1 flex flex-col overflow-hidden">
              <HeaderCompoent 
                user={users} 
                // selectedWorkspace={selectedWorkspace} 
              />
              {children}
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
