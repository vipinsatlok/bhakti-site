import { ICallingData } from "@/types/CallingSeva";
import { JSONFile } from "@/utils/jsonFileHelper";
import { DATAFOLDER } from "@/utils/secretData";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

const callingSevaData = async (user_id: string) => {
  const data = await JSONFile.read<ICallingData>(
    DATAFOLDER + "calling-seva.json"
  );

  const filteredData = data?.filter((item) => item.user_id == user_id);
  return filteredData || [];
};

const CallingSevaCard = async ({ user_id }: { user_id: string }) => {
  const data = await callingSevaData(user_id);
  const count = (type: string = "all") => {
    let totalCount = 0;
    data.forEach((item) => {
      if (item.type === type || type === "all") {
        totalCount++;
      }
    });
    return totalCount < 10 ? "0" + totalCount : totalCount;
  };

  return (
    <div className="flex flex-col border rounded p-2">
      <span className="text-gray-800 font-bold mb-2">Calling Seva</span>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col">
          <span className="text-[10px] text-orange-950 -mb-2">Video</span>
          <span className="text-4xl font-bold">{count("video")}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-orange-950 -mb-2">Audio</span>
          <span className="text-4xl font-bold">{count("audio")}</span>
        </div>
        <div className="flex col-span-2 bg-gray-200 rounded p-2 flex-col">
          <span className="text-[10px] text-orange-950 -mb-2">Total</span>
          <span className="text-4xl text-blue-900 font-bold">{count()}</span>
        </div>
      </div>
      <div className="mt-5 flex gap-2">
        <Button size={"sm"}>
          <Link href={"/calling-seva"}>See All</Link>
        </Button>
        <Button size={"sm"}>
          <Link href={"/calling-seva/add"}>Add New</Link>
        </Button>
      </div>
    </div>
  );
};

export default CallingSevaCard;
