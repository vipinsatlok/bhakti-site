// "use client";

import { Button } from "@chakra-ui/react";
import React from "react";

interface IListPagination {
  currentPage: number;
  totalPages: number;
  data: any[];
}

const ListPagination = ({
  currentPage = 1,
  totalPages,
  data,
}: IListPagination) => {
  return (
    <div className="mt-3">
      <Button className="mr-2">Prev</Button>
      <Button>Next</Button>
    </div>
  );
};

export default ListPagination;
