"use client";

import { Button } from "@chakra-ui/react";
import { saveAs } from "file-saver";
import React, { useState } from "react";

const DownloadData = ({ fileName }: { fileName: string }) => {
  const [state, setState] = useState("Downlaod");

  const onClick = async () => {
    const res = await fetch("/api/getFile", {
      headers: { fileName },
    });
    const { data } = await res.json();

    // saveAs(, "users.json");

    setState("Downlaod");
  };

  return (
    <Button onClick={onClick} fontSize={"xs"} size={"xs"}>
      {state}
    </Button>
  );
};

export default DownloadData;
