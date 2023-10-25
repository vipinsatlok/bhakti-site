"use client";

import { setSearchParams } from "@/utils/url";
import { Button, Select } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const Filter = () => {
  const [shift, setShift] = useState("");
  const [type, setType] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <form className="flex justify-end gap-2">
      <Select
        name="shift"
        value={shift}
        onChange={(e) => setShift(e.target.value)}
      >
        <option value="">Select Shift</option>
        <option value="morning">Morning</option>
        <option value="noon">Noon</option>
        <option value="evening">Evening</option>
        <option value="night">Night</option>
      </Select>
      <Select onChange={(e) => setType(e.target.value)}>
        <option value="">Select Type</option>
        <option value="video">Video</option>
        <option value="audio">Audio</option>
      </Select>
      <Button
        onClick={() => {
          setSearchParams({
            path: "/calling-seva",
            router,
            searchParams,
            values: { shift, type },
          });
        }}
        width={"full"}
      >
        Search
      </Button>
    </form>
  );
};

export default Filter;
