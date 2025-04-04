import HeaderComponent from "@/components/HeaderComponent";
import { getUsers, getWorkspaceById, getWorkspaces } from "../../../service/api-service";
import "../globals.css";
import SidebarComponent from "@/components/SideBarComponent";

export default async function DashboardLayout({ children, params }) {
  const workspaceId = (await params)?.workspaceId;
  const workspaces = await getWorkspaces();
  const users = await getUsers();
  const currentWorkspace = await getWorkspaceById(workspaceId);

  return (
    <>
      <html lang="en">
        <body>
          <div className="flex h-screen bg-gray-50">
            <SidebarComponent workspaces={workspaces} />
            <div className="flex-1 flex flex-col overflow-hidden">
              <HeaderComponent 
                user={users} 
                workspace={currentWorkspace}
              />
              {children}
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
