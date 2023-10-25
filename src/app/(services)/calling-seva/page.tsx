import React from "react";
import { ICallingData } from "@/types/CallingSeva";
import Ui from "./Ui";
import { JSONFile } from "@/utils/jsonFileHelper";
import { DATAFOLDER } from "@/utils/secretData";
import { getUser } from "@/utils/getUser";
import { getDataFormat } from "@/utils/fetchData";
import { IPageProps } from "@/types/Unique";

const callingSevaData = async (
  user_id: string,
  currentPage: number = 1,
  shift = "",
  type = ""
) => {
  const data = await JSONFile.read<ICallingData>(
    DATAFOLDER + "calling-seva.json"
  );

  let filteredData = data?.filter((item) => item.user_id === user_id);
  if (shift) {
    filteredData = filteredData?.filter((item) => item.shift === shift);
  }

  if (type) {
    filteredData = filteredData?.filter((item) => item.type === type);
  }

  const formateData = getDataFormat(filteredData || [], currentPage);
  return formateData || [];
};

interface ISearch {
  shift: string;
  type: string;
  page: number;
}

const CallingSeva = async ({ searchParams }: IPageProps<ISearch>) => {
  const user = await getUser();
  if (!user) return;

  console.log(searchParams);
  const data = await callingSevaData(
    user.id,
    searchParams?.page,
    searchParams?.shift,
    searchParams?.type
  );
  return <Ui searchParams={searchParams} {...data} />;
};

export default CallingSeva;
