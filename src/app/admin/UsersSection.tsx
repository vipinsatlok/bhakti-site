import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import DownloadData from "./DownlaodData";
import { JSONFile } from "@/utils/jsonFileHelper";
import { DATAFOLDER } from "@/utils/secretData";
import { IUserData } from "@/types/User";

const UsersSection = async () => {
  const path = DATAFOLDER + "users.json";
  const users = await JSONFile.read<IUserData>(path);
  const totalUsers = users
    ? users?.length < 10
      ? "0" + users?.length
      : users?.length
    : "00";

  return (
    <div className="border rounded p-2">
      <div className="flex flex-col">
        <span className="text-xs">Total Users</span>
        <span className="text-4xl font-bold">
          {totalUsers}
        </span>
      </div>

      <div className="mt-5 flex gap-2">
        <Button fontSize={"xs"} size={"xs"}>
          <Link href={"/admin/users"}>See All</Link>
        </Button>
        <Button fontSize={"xs"} size={"xs"}>
          <Link href={"/admin/users/add"}>Add New</Link>
        </Button>
        <DownloadData fileName="users.json" />
      </div>
    </div>
  );
};

export default UsersSection;
