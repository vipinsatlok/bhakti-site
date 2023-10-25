"use client";

import { setSearchParams } from "@/utils/url";
import { Button } from "@chakra-ui/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReadonlyURLSearchParams } from "next/navigation";
import React from "react";

interface IListPagination {
  currentPage: number;
  totalPages: number;
  path: string;
  router: AppRouterInstance;
  searchParams: ReadonlyURLSearchParams;
}

const ListPagination = ({
  currentPage = 1,
  totalPages,
  path,
  router,
  searchParams,
}: IListPagination) => {
  return (
    <div className="mt-3 flex gap-2">
      {+totalPages >= 2 && +currentPage !== 1 && (
        <Button
          onClick={() => {
            setSearchParams({
              path,
              router,
              searchParams,
              values: { page: Number(currentPage) - 1 },
            });
          }}
        >
          Prev
        </Button>
      )}
      {+totalPages > 1 && +totalPages !== +currentPage && (
        <Button
          onClick={() => {
            setSearchParams({
              path,
              router,
              searchParams,
              values: { page: Number(currentPage) + 1 },
            });
          }}
        >
          Next
        </Button>
      )}
    </div>
  );
};

export default ListPagination;
