"use client";

import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { saveAs } from "file-saver";

const DownloadData = ({ fileName }: { fileName: string }) => {
  const [state, setState] = useState("Downlaod");

  const onClick = async () => {
    setState("Downloading...");
    const res = await fetch("/api/getFile", {
      headers: { fileName },
    });
    const { data } = await res.json();
    const blob = new Blob([JSON.stringify(data)], { type: "application/json" });

    saveAs(blob, fileName);
    setState("Download");
  };

  return (
    <Button onClick={onClick} fontSize={"xs"} size={"xs"}>
      {state}
    </Button>
  );
};

export default DownloadData;
