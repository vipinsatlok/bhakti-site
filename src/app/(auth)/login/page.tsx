import React from "react";
import Ui from "./Ui";
import { action } from "./action";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getUser } from "@/utils/getUser";

export const metadata: Metadata = {
  title: "Login Page : Bhakti Site",
};

const Login = async () => {
  const user = await getUser();
  if (user) return redirect("/");

  return <Ui action={action} />;
};

export default Login;
