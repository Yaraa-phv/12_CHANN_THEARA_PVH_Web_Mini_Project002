import { headers } from "next/headers";
import { auth } from "../auth";

export async function getWorkspaces() {
  const session = await auth();
  const res = await fetch(
    `http://96.9.81.187:8080/api/v1/workspaces?pageNo=0&pageSize=10&sortBy=workspaceId&sortDirection=ASC`,{
      method:"GET",
      headers:{
        "accept": "*/*",
        "Authorization": `Bearer ${session.payload.token}`
      }
    }
  );
  // console.log("res in Workspace : ", await res.json());
  if (!res.ok) return("Failed to fetch workspaces");
  return res.json();
}

export async function getUsers() {
  const session = await auth();
  const res = await fetch(`http://96.9.81.187:8080/api/v1/user`, {
    method: "GET",
    headers: {
      "accept": "*/*",
      "Authorization": `Bearer ${session.payload.token}`
    }
  })
  const data = await res.json();
  return data;
}

export async function getTasksByWorkspaceId( workspaceId ) {
  const session = await auth();
  const res = await fetch(`http://96.9.81.187:8080/api/v1/tasks/workspace/${workspaceId}?pageNo=0&pageSize=10&sortBy=taskId&sortDirection=ASC
`, {
    method: "GET",
    headers: {
      "accept": "*/*",
      "Authorization": `Bearer ${session.payload.token}`
    }
  })
  const data = await res.json();
  console.log("data of tasks : ", data);
  return data;
}


// export async function setFavoriteStatus(workspaceId, favorite) {
//   const session = await auth();
//   const token = session.payload?.token;

//   if (!token) {
//     throw new Error("Authentication token is missing");
//   }

//   const res = await fetch(
//     `http://96.9.81.187:8080/api/v1/workspace/${workspaceId}/favorite?favorite=${favorite}`,
//     {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${token}`,
//       },
//     }
//   );

//   if (!res.ok) return(`Failed to update favorite: ${res.status}`);

//   return res.json();
// }


