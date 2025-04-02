// import { redirect } from "next/navigation";

import { redirect } from "next/navigation";

// import { redirect } from "next/dist/server/api-utils";

export const loginService = async ({ email, password }) => {
  const res = await fetch(`http://96.9.81.187:8080/api/v1/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const data = await res.json();
  if (!data) {
    redirect("/login");
    // redirect("/login");
  }
  return data;
};