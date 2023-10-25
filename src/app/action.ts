"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logoutAction = async () => {
  const cookieStore = cookies();
  cookieStore.delete("auth");
  cookieStore.delete("token");
  redirect("/login");
};
