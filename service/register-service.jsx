import { redirect } from "next/navigation";

export const registerService = async ({ username, email, password }) => {
  const res = await fetch(`http://96.9.81.187:8080/api/v1/auth/register`, {
    method: "POST",
    headers: {
      "accept": "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username, email, password
      // username: username,
      // email: email,
      // password: password,
    }),
  });
  const data = await res.json();
  console.log("res in registerService : ", data);
  if (!data) {
    redirect("/login");
  }
  return data;
};