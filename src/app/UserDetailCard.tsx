import { IUserData } from "@/types/User";
import { Button } from "@chakra-ui/react";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const UserDetailCard = ({ name, naamdanDate, email, role }: IUserData) => {
  const formAction = async () => {
    "use server";
    const cookieStore = cookies();
    cookieStore.delete("auth");
    cookieStore.delete("token");
    redirect("/login");
  };

  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <span className="text-2xl font-bold">{name}</span>
        <span className="text-gray-800 text-xs">{email}</span>
      </div>
      <div>
        <form className="flex flex-col gap-1" action={formAction}>
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
