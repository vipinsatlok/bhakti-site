"use server";

import { IUserData } from "@/types/User";
import { readJSONFile, writeJSONFile } from "@/utils/jsonFileHelper";
import { DATAFOLDER } from "@/utils/secretData";
import { sendErrorInAction } from "@/utils/sendErrorInAction";
import { verifyUser } from "@/utils/getUser";
import { redirect } from "next/navigation";

export const action = async (prevData: any, data: FormData) => {
  const old_Password = data.get("old_password");
  const new_password = data.get("new_password");
  const confirm_password = data.get("confirm_password");

  if (!(old_Password || new_password || confirm_password)) {
    return sendErrorInAction("all fields are required!");
  }

  if (!(new_password === confirm_password)) {
    return sendErrorInAction("confirm password not match");
  }
  const user = await verifyUser();
  if (!user) return redirect("/");

  if (user.password !== old_Password) {
    return sendErrorInAction("old password not match");
  }

  const path = DATAFOLDER + "users.json";
  const userData = await readJSONFile<IUserData>(path);
  const updatedData = userData?.map((item) => {
    if (item.id === user.id) {
      return { ...item, password: new_password };
    }
    return item;
  });

  const isUpdated = await writeJSONFile(path, JSON.stringify(updatedData));

  if (isUpdated) {
    return sendErrorInAction("password updated succesfully!");
  }
};
