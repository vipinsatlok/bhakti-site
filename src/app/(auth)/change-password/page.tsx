import React from "react";
import Ui from "./Ui";
import { action } from "./action";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bhakti Site : Change Password",
};

const ChangePassword = () => {
  return <Ui action={action} />;
};

export default ChangePassword;
