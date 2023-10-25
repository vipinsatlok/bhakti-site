"use server";

import { JSONFile } from "@/utils/jsonFileHelper";
import { DATAFOLDER } from "@/utils/secretData";
import { useParams } from "next/navigation";

export const action = async () => {
  const params = useParams();

  console.log(params);
//   JSONFile.delete(DATAFOLDER + "users.json");
};
