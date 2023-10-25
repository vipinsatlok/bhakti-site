"use client";

import { IAction } from "@/types/Unique";
import { Button, Input } from "@chakra-ui/react";
import React from "react";
import { experimental_useFormState as useFormState } from "react-dom";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const initialState = "";

const Ui = ({ action }: IAction) => {
  const [state, formAction] = useFormState(action, initialState);
  const { pending } = useFormStatus();

  return (
    <div>
      <h1>Add User</h1>
      <p className="text-red-700 font-bold capitalize mb-2">{String(state)}</p>
      <form className="flex flex-col gap-3" action={formAction}>
        <Input name="name" placeholder="Enter Name" />
        <Input name="email" placeholder="Enter Email" />
        <Input name="password" placeholder="Enter Password" />
        <Button isLoading={pending} type="submit">
          Add User
        </Button>
      </form>
    </div>
  );
};

export default Ui;
