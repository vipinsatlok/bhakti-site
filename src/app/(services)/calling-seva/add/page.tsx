"use client";

import { ICallingFields } from "@/types/CallingSeva";
import { Button, Input, Select, Text } from "@chakra-ui/react";
import React from "react";
import { action } from "./action";

const CallingSevaAdd = () => {
  return (
    <div className="mt-5">
      <h1>Add Your Calling Seva</h1>
      <form className="flex flex-col gap-3" action={action}>
        <Select name="shift">
          <option value="">Select Shift</option>
          <option value="morning">Morning</option>
          <option value="noon">Noon</option>
          <option value="evening">Evening</option>
          <option value="night">Night</option>
        </Select>
        <Select name="type">
          <option value="">Select Type</option>
          <option value="video">Video</option>
          <option value="audio">Audio</option>
        </Select>
        <Input name="date" type="date" />
        <Input name="location" placeholder="Enter Location" type="text" />

        <div>
          <Button type="submit" width={"max-content"}>
            Add
          </Button>
          <Button marginLeft={"3"} width={"max-content"}>
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CallingSevaAdd;
