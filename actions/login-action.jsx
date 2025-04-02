"use server";

import { redirect } from "next/navigation";
import { signIn } from "../auth";

// import { redirect } from "next/navigation";
// import { signIn } from "../auth";

export const loginAction = async (formData) => {
  const email= formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { error: "Email and password are required!" };
  }

  const result = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  if (result?.error) {
    return { error: "Invalid email or password!" };
  }
  redirect("/dashboard")
};