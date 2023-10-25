"use client";

import { IAction } from "@/types/Unique";
import { JSONFile } from "@/utils/jsonFileHelper";
import { DATAFOLDER } from "@/utils/secretData";
import { Button } from "@chakra-ui/react";
import React from "react";
import { experimental_useFormState as useFormState } from "react-dom";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const initialState = "";

const DeleteButton = ({ id }: { id: number }) => {
  const [state, formAction] = useFormState(deleteUser, initialState);
  const { pending } = useFormStatus();

  return (
    <div className="mt-5">
      <h1>{user.name}</h1>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col text-xs rounded border p-2">
          <p className="font-bold mb-3 text-green-600">PERSONAL INFORMATION</p>
          <span className="text-base font-bold">ID - {user.id}</span>
          <span>EMAIL - {user.email}</span>
          <span>PASSWORD - {user.password}</span>
        </div>
        <div className="flex flex-col text-xs rounded border p-2">
          <p className="font-bold mb-3 text-green-600">
            CALLING SEVA INFORMATION
          </p>
          <span>TOTAL CALLING SEVA - {33}</span>
          <span>TOTAL AUDIO CALLING SEVA- {33}</span>
          <span>TOTAL VIDEO CALLING SEVA- {33}</span>
        </div>
        <DeleteButton id={user_id} />
      </div>
      <form action={formAction}>
        <Button type="submit">Delete User</Button>
      </form>
    </div>
  );
};

export default DeleteButton;
