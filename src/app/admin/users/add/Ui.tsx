"use client";

import { IAction } from "@/types/Unique";
import { Button, Input } from "@chakra-ui/react";
import React from "react";

const Ui = ({ action }: IAction) => {
  return (
    <div>
      <h1>Add User</h1>
      <form className="flex flex-col gap-3" action={action}>
        <Input name="name" placeholder="Enter Name" />
        <Input name="email" placeholder="Enter Email" />
        <Input name="password" placeholder="Enter Password" />
        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
};

export default Ui;
