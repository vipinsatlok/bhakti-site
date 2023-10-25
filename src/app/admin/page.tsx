import React from "react";
import DownlaodData from "./DownlaodData";
import { verifyUser } from "@/utils/getUser";
import { redirect } from "next/navigation";

const Admin = async () => {
  const user = await verifyUser();
  if (!user || user.role !== "admin") return redirect("/");

  return (
    <div className="mt-5">
      <DownlaodData />
    </div>
  );
};

export default Admin;
