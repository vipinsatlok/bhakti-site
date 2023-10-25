import { ICallingData } from "@/types/CallingSeva";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Calling Seva List",
};

const ListItem = ({
  type,
  location,
  date,
  id,
  shift,
  index = 1,
}: ICallingData) => {
  const fullDate = date;

  return (
    <div className="rounded list-main border hover:shadow-md transition-all flex justify-between items-center p-3">
      <div className="flex flex-col">
        <span className="text-gray-700 text-xs">
          {type} - {shift}
        </span>
        <span className="text-xl font-semibold">{fullDate}</span>
        <span className="text-sm text-gray-900">{location}</span>
      </div>
      <div className="w-[30px] h-[30px]  flex items-center justify-center text-base font-bold bg-green-600 text-white rounded">
        {Number(index) < 9 ? "0" + index : index}
      </div>
    </div>
  );
};

export default ListItem;
