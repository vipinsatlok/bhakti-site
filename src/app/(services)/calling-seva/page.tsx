import Ui from "./Ui";
import React from "react";
import { getUser } from "@/utils/getUser";
import { IPageProps } from "@/types/Unique";
import { getData } from "./getData";
import { ISearchParams } from "@/types/CallingSeva";

const CallingSeva = async ({ searchParams }: IPageProps<ISearchParams>) => {
  const user = await getUser();
  if (!user) return;

  const params = { ...searchParams, user_id: user.id };
  const callingData = await getData(params);

  return <Ui searchParams={searchParams} {...callingData} />;
};

export default CallingSeva;
