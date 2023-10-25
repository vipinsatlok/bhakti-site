"use server";

import { appendJSONFile, readJSONFile } from "@/utils/jsonFileHelper";
import { verifyUser } from "@/utils/getUser";

export const action = async (data: FormData) => {
  const shift = data.get("shift");
  const type = data.get("type");
  const date = data.get("date");
  const location = data.get("location");

  const user = await verifyUser();

  if (!(shift || type || date || location)) return false;

  const path = process.env.DATAFOLDER + "calling-seva.txt";
  await appendJSONFile(path, JSON.stringify({
    shift,
    date,
    type,
    location,
    user_id: user && user.id,
  }))
};
