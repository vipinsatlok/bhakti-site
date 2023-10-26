import React from "react";
import DownlaodData from "./DownlaodData";
import { getUser } from "@/utils/getUser";
import { redirect } from "next/navigation";
import UsersSection from "./UsersSection";

const Admin = async () => {
  const user = await getUser();
  if (!user || user.role !== "admin") return redirect("/");

  return (
    <div className="mt-5">
      <h1>Admin Page</h1>
      <UsersSection />
    </div>
  );
};

export default Admin;
