"use client";

import React from "react";
import { IAction } from "@/types/Unique";
import { Button, Input } from "@chakra-ui/react";

const LoginUi = ({ action }: IAction) => {
  return (
    <form action={action} className="w-full flex py-5 flex-col gap-3">
      <h1>Welcome Back!</h1>

      <p className="text-sm text-red-800 capitalize mb-1"></p>
      <Input
        name="email"
        type="email"
        placeholder="Enter Your Email"
        required
      />
      <Input
        name="password"
        type="password"
        placeholder="Enter Password"
        required
      />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginUi;
