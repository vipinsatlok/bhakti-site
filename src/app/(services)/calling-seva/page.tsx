import React from "react";
import { ICallingData } from "@/types/CallingSeva";
import Ui from "./Ui";

const serverData: ICallingData = {
  currentPage: 1,
  totalPages: 3,
  data: [
    {
      id: "323",
      date: "21-02-2000",
      location: "vipin",
      shift: "morning",
      type: "audio",
    },
  ],
};

const getData = async () => {
  return serverData;
};

const CallingSeva = async (props) => {
  console.log(props);
  const data = await getData();
  return <Ui />;
};

export default CallingSeva;
