import { IUserData } from "@/types/User";
import { JSONFile } from "@/utils/jsonFileHelper";
import { DATAFOLDER } from "@/utils/secretData";
import React from "react";
import UserCard from "./UserCard";
import { Button, Select } from "@chakra-ui/react";
import Link from "next/link";
import { getDataFormat } from "@/utils/fetchData";

const getAllUsers = async ({ role, currentPage = 1 }: ISearch) => {
  const users = await JSONFile.read<IUserData>(DATAFOLDER + "users.json");
  const dataFormat = getDataFormat(users || [], currentPage);
  return dataFormat;
};

interface ISearch {
  role: "admin" | "user";
  currentPage?: number;
}

interface TSearchParams {
  params: any;
  searchParams: ISearch;
}

const Users = async ({ params, searchParams }: TSearchParams) => {
  const currentPageSearch = Number(searchParams.currentPage || 1);
  const role = searchParams.role;
  const { currentPage, totalPages, data } = await getAllUsers({
    role,
    currentPage: currentPageSearch,
  });

  if (!data) return <div>No Users</div>;

  return (
    <div className="mt-5">
      <div className="flex justify-between">
        <h1>Users</h1>
        <Link href={"/admin/users/add"}>
          <Button fontSize={"xs"} size={"xs"}>
            ADD
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        {data.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
      <div className="mt-5 flex gap-2">
        {totalPages >= 2 && currentPage !== 1 && (
          <Button>
            <Link
              href={{
                href: "/admin/users",
                query: {
                  currentPage: currentPage === 1 ? 1 : currentPage - 1,
                },
              }}
            >
              Prev
            </Link>
          </Button>
        )}
        {totalPages > 1 && totalPages !== currentPage && (
          <Button>
            <Link
              href={{
                href: "/admin/users",
                query: {
                  currentPage:
                    currentPage == totalPages ? totalPages : currentPage + 1,
                },
              }}
            >
              Next
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Users;
