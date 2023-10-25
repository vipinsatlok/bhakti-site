"use server";

import { sendErrorInAction } from "@/utils/sendErrorInAction";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { sign } from "jsonwebtoken";
import { JSONFile } from "@/utils/jsonFileHelper";
import { IUserData } from "@/types/User";
import { DATAFOLDER } from "@/utils/secretData";

export const loginAction = async (prevState: any, data: FormData) => {
  const email = data.get("email");
  const password = data.get("password");

  if (!Boolean(email)) {
    return sendErrorInAction("Email is Required!");
  }

  if (!Boolean(password)) {
    return sendErrorInAction("Password is Required!");
  }

  const usersData = await JSONFile.read<IUserData>(DATAFOLDER + "users.json");
  const user = usersData?.find((item) => {
    return item.email === email && item.password === password;
  });

  if (!user) return sendErrorInAction("username or password not match!");

  const cookieStore = cookies();
  const token = sign({ user_id: user?.id }, process.env.JWT_SECRET as string);
  cookieStore.set("token", token, { httpOnly: true, secure: true });
  cookieStore.set("auth", "true", { httpOnly: true, secure: true });

  redirect("/");
};
