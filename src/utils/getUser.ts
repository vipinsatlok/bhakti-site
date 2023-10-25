"use server";

import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";
import { JSONFile } from "./jsonFileHelper";
import { IUserData } from "@/types/User";
import { DATAFOLDER } from "./secretData";

export const getUser = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return false;
  const user_id = verify(token, process.env.JWT_SECRET as string) as {
    user_id: string;
  };

  if (!Boolean(user_id?.user_id)) return false;

  const path = DATAFOLDER + "users.json";
  const data = await JSONFile.read<IUserData>(path);

  if (data) {
    const user = data.find((item) => item.id === user_id.user_id);
    if (!user) return false;
    return user;
  }
};
