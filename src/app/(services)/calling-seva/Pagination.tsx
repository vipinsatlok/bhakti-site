"use client";

import ListPagination from "@/components/ListPagination";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <ListPagination
      currentPage={currentPage}
      path="/calling-seva"
      router={router}
      searchParams={searchParams}
      totalPages={totalPages}
    />
  );
};

export default Pagination;
