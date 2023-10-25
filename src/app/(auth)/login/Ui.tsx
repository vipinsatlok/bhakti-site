"use client";

import React from "react";
import { IAction } from "@/types/Unique";
import { Button, Input } from "@chakra-ui/react";
import { experimental_useFormState as useFormState } from "react-dom";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const initialState = "";

const LoginUi = ({ action }: IAction) => {
  const [state, formAction] = useFormState(action, initialState);
  const { pending } = useFormStatus();

  return (
    <form action={formAction} className="w-full flex py-5 flex-col gap-2">
      <h1>Welcome Back!</h1>

      <p className="text-sm text-red-800 capitalize mb-1">
        {state && String(state)}
      </p>
      <Input
        name="email"
        type="email"
        placeholder="Enter Your Email"
        // required
      />
      <Input
        name="password"
        type="password"
        placeholder="Enter Password"
        // required
      />
      <Button isLoading={pending} type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginUi;
