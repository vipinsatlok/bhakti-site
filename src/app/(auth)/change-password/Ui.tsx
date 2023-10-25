"use client";

import { Button, Input } from "@chakra-ui/react";
import React from "react";
import { experimental_useFormState as useFormState } from "react-dom";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const initialState = "";

const Ui = ({ action }: { action: (data: FormData) => {} }) => {
  const [state, formAction] = useFormState(action, initialState);
  const { pending } = useFormStatus();

  return (
    <form action={formAction} className="w-full flex py-5 flex-col gap-2">
      <h1>Change Your Password</h1>

      <p className="text-sm text-red-800 capitalize mb-1">
        {state && String(state)}
      </p>
      <Input
        name="old_password"
        type="text"
        placeholder="Enter Old Password"
        required
      />
      <Input
        name="new_password"
        type="text"
        placeholder="Enter New Password"
        required
      />
      <Input
        name="confirm_password"
        type="password"
        placeholder="Enter Confirm Password"
        required
      />
      <Button type="submit">Update</Button>
    </form>
  );
};

export default Ui;
