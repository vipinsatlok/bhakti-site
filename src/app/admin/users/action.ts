"use server";

import { sendErrorInAction } from "@/utils/sendErrorInAction";

export const action = async () => {
  console.log("satingngf...");
  return sendErrorInAction("Downloading...");
};
