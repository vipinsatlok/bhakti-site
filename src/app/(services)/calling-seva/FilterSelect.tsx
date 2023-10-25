"use client";

import { Select } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const FilterSelect = () => {
  const params = useRouter();
  const [shift, setShift] = useState("");

  const onChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    setShift(target.value);
  };

  return (
    <Select name="shift" value={shift} onChange={onChange}>
      <option value="">Select Shift</option>
      <option value="morning">Morning</option>
      <option value="noon">Noon</option>
      <option value="evening">Evening</option>
      <option value="night">Night</option>
    </Select>
  );
};

export default FilterSelect;
