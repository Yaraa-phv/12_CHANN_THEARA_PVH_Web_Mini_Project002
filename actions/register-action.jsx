"use server";

import { redirect } from "next/navigation";
import { signIn } from "../auth";
import { registerService } from "../service/register-service";

export const registerAction = async (formData) => {
  const username = formData.get("username");
  const email= formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { error: "Username, Email, and Password are required!" };
  }

  const result = await registerService({
    username,
    email,
    password
  });

  console.log("result in registerAction : ", result);

  if (result?.error) {
    return { error: "Invalid register!" };
  }
  redirect("/login")
};