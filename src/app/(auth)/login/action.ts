"use server";

import { sendErrorInAction } from "@/utils/sendErrorInAction";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { sign } from "jsonwebtoken";
import { JSONFile } from "@/utils/jsonFileHelper";
import { IUserData } from "@/types/User";
import { DATAFOLDER } from "@/utils/secretData";

export const action = async (data: FormData) => {
  const email = data.get("email");
  const password = data.get("password");

  console.log("start")

  if (!email || !password) return;

  const usersData = await JSONFile.read<IUserData>(DATAFOLDER + "users.json");
  const user = usersData?.find((item) => {
    return item.email === email && item.password === password;
  });

  if (!user) return redirect("/login");

  const cookieStore = cookies();
  const token = sign({ user_id: user?.id }, process.env.JWT_SECRET as string);
  cookieStore.set("token", token, { httpOnly: true, secure: true });
  cookieStore.set("auth", "true", { httpOnly: true, secure: true });

  console.log("done")
  redirect("/");
};
