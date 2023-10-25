import React from "react";
import Ui from "./Ui";
import { loginAction } from "./action";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getUser } from "@/utils/getUser";

export const metadata: Metadata = {
  title: "Login Page : Bhakti Site",
};

const Login = async () => {
  const user = await getUser();
  if (user) return redirect("/");

  return <Ui action={loginAction} />;
};

export default Login;
