import ListHeader from "@/components/ListHeader";
import { Select } from "@chakra-ui/react";
import React from "react";
import ListItem from "./ListItem";
import ListPagination from "@/components/ListPagination";
import { readJSONFile } from "@/utils/jsonFileHelper";
import { notFound } from "next/navigation";
import FilterSelect from "./FilterSelect";

const getCallingSeva = async () => {
  const path = process.env.DATAFOLDER + "calling-seva.txt";
  const fileData = await readJSONFile(path, true);

  const d = fileData
    ?.toString()
    .split("}")
    .map((item) => item + "}");
  d?.pop();

  const v = d?.map((item) => JSON.parse(item));
  return v;
};

const Ui = async () => {
  const callingData = await getCallingSeva();

  if (!callingData) return notFound();
  return (
    <div className="flex flex-col mt-3 gap-3">
      {/* header sec */}
      <ListHeader title="Calling Seva" url="/calling-seva/add" />

      {/* filters */}
      <div className="flex flex-col">
        <div className="flex justify-between mb-2">
          <span className="text-xs text-gray-500">FILTERS</span>
          <span className="text-xs text-gray-500">Total : 01</span>
        </div>
        <div className="flex gap-2">
          <FilterSelect />
          <Select>
            <option value="">Select Type</option>
            <option value="">Morning</option>
            <option value="">Noon</option>
          </Select>
        </div>
      </div>

      {/* list */}
      <div className="flex flex-col gap-2">
        {callingData.map((item) => {
          return <ListItem key={item.id} {...item} />;
        })}
      </div>

      {/* pagination */}
      <ListPagination />
    </div>
  );
};

export default Ui;
