import { ICallingData } from "@/types/CallingSeva";
import { getDataFormat } from "@/utils/fetchData";
import { JSONFile } from "@/utils/jsonFileHelper";
import { DATAFOLDER } from "@/utils/secretData";

interface IParams {
  user_id: string;
  page?: number;
  shift?: string;
  type?: string;
}

export const getData = async (params: IParams) => {
  const { page, shift, type, user_id } = params;
  const path = DATAFOLDER + "calling-seva.json";
  const data = await JSONFile.read<ICallingData>(path);

  let filteredData = data?.filter((item) => item.user_id === user_id);
  if (shift) {
    filteredData = filteredData?.filter((item) => item.shift === shift);
  }

  if (type) {
    filteredData = filteredData?.filter((item) => item.type === type);
  }

  const formateData = getDataFormat(filteredData || [], page);
  return formateData;
};
