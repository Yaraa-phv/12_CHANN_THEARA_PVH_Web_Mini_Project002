import { auth } from "../auth";

export async function getWorkspaces() {
  const res = await fetch(
    `http://96.9.81.187:8080/api/v1/workspaces?pageNo=0&pageSize=10&sortBy=workspaceId&sortDirection=ASC`
  );
  if (!res.ok) return("Failed to fetch workspaces");
  return res.json();
}

export async function setFavoriteStatus(workspaceId, favorite) {
  const session = await auth();
  const token = session.payload?.token;

  if (!token) {
    throw new Error("Authentication token is missing");
  }

  const res = await fetch(
    `http://96.9.81.187:8080/api/v1/workspace/${workspaceId}/favorite?favorite=${favorite}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) return(`Failed to update favorite: ${res.status}`);

  return res.json();
}


export async function getWorkspacesById(workspaceId) {
  const res = await fetch(
    `http://96.9.81.187:8080/api/v1/workspace/${workspaceId}`
  );
  if (!res.ok) return("Failed to fetch workspaces");
  return res.json();
}

export async function getAllTaskbyWorkspaceId(workspaceId) {
  const res = await fetch(`http://96.9.81.187:8080/api/v1/task/workspace/${workspaceId}`);

  if(!res.ok) return("Failed to fetch tasks by workspaceId");
  return res.json();
  
}