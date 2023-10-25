"use server";

import { getUser } from "@/utils/getUser";
import { JSONFile } from "@/utils/jsonFileHelper";
import { DATAFOLDER } from "@/utils/secretData";
import { redirect } from "next/navigation";

export const action = async (data: FormData) => {
  const shift = data.get("shift");
  const type = data.get("type");
  const date = data.get("date");
  const location = data.get("location");

  const user = await getUser();
  if (!user) return;

  if (!(shift || type || date || location)) return false;

  const path = DATAFOLDER + "calling-seva.json";

  JSONFile.write(DATAFOLDER + "calling-seva.json", {
    shift,
    type,
    date,
    location,
    user_id: user.id,
  });

  redirect("/calling-seva");
};
