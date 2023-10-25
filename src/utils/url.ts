"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReadonlyURLSearchParams } from "next/navigation";

export const setSearchParams = ({
  path,
  router,
  searchParams,
  values,
}: {
  path: string;
  router: AppRouterInstance;
  searchParams: ReadonlyURLSearchParams;
  values: {};
}) => {
  const current = new URLSearchParams(Array.from(searchParams.entries()));
  Object.entries(values).forEach(([key, value]) => {
    if (key === "page" && value == Number(1)) {
      current.delete(key);
    } else if (value) {
      current.set(key, value as string);
    } else {
      current.delete(key);
    }
  });
  router.replace(`${path}?${current.toString()}`);
};
