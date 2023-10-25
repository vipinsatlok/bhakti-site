import { IPageProps } from "@/types/Unique";
import { IUserData } from "@/types/User";
import { JSONFile } from "@/utils/jsonFileHelper";
import { DATAFOLDER } from "@/utils/secretData";
import { Button } from "@chakra-ui/react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import DeleteButton from "./Ui";

export const metadata: Metadata = {
  title: "Bhakti Site",
};

const getUser = async (user_id?: string) => {
  const users = await JSONFile.read<IUserData>(DATAFOLDER + "users.json");
  const user = users?.find((user) => user.id == user_id);
  if (!user) return notFound();

  return user;
};

const User = async ({ params, searchParams }: IPageProps<{}>) => {


  return (
    
  );
};

export default User;
