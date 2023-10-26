import ListHeader from "@/components/ListHeader";
import React from "react";
import ListItem from "./ListItem";
import { ICallingData, ISearchParams } from "@/types/CallingSeva";
import { IFormateData } from "@/types/Unique";
import Filter from "./Filter";
import NotFoundData from "@/components/NotFoundData";
import Pagination from "./Pagination";

interface IProps extends IFormateData<ICallingData> {
  searchParams?: ISearchParams;
}

const Ui = async (props: IProps) => {
  const { searchParams, data, totalData, totalPages, currentPage, limit } =
    props;

  return (
    <div className="flex flex-col mt-3 gap-3">
      {/* header sec */}
      <ListHeader title="📲 Calling Seva" url="/calling-seva/add" />

      {/* filters */}
      <div className="flex flex-col">
        <div className="flex justify-between mb-2">
          <span className="text-xs text-gray-500">🛡 FILTERS</span>
          <span className="text-xs text-gray-500">
            🛡 TOTAL : {totalData < 9 ? "0" + totalData : totalData}
          </span>
        </div>
        <Filter />
      </div>

      {/* list */}
      <div className="flex flex-col gap-2">
        {data && data.length ? (
          data.map((item, index) => {
            return <ListItem index={index + 1} key={item.id} {...item} />;
          })
        ) : (
          <NotFoundData />
        )}
      </div>

      {/* pagination */}
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
};

export default Ui;
