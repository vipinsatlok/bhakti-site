"use server";

import { JSONFile } from "@/utils/jsonFileHelper";
import { DATAFOLDER } from "@/utils/secretData";
import { sendErrorInAction } from "@/utils/sendErrorInAction";
import { redirect } from "next/navigation";

export const action = async (data: FormData) => {
  const name = data.get("name");
  const email = data.get("email");
  const password = data.get("password");
  const role = "user";

  if (!(name || email || password)) return;
  JSONFile.write(DATAFOLDER + "users.json", {
    name,
    email,
    password,
    role,
  });

  return redirect("/admin/users");
};
