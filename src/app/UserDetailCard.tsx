import React from "react";
import Link from "next/link";
import { IUserData } from "@/types/User";
import { Button } from "@chakra-ui/react";
import { logoutAction } from "./action";

const UserDetailCard = ({ name, email, role }: IUserData) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <span className="text-2xl capitalize font-bold">{name}</span>
        <span className="text-gray-800 text-xs">{email}</span>
      </div>
      <div>
        <form className="flex flex-col gap-1" action={logoutAction}>
          <Button type="submit" size={"xs"}>
            Logout
          </Button>
          {role === "admin" && (
            <Button size={"xs"}>
              <Link href={"/admin"}>Admin</Link>
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default UserDetailCard;
