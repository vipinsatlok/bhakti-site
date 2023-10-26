"use client";

import { Button } from "@chakra-ui/react";
import React, { useState } from "react";

const DownloadData = ({ fileName }: { fileName: string }) => {
  const [state, setState] = useState("Downlaod");

  const onClick = async () => {
    setState("Genrating...");
    const res = await fetch("/api/add", {
      headers: { fileName },
    });
    const data = await res.json();

    setState("Downloading...");

    const a = document.createElement("a");
    // document.body.appendChild(a);

    a.href = "/users.json";
    a.download;
    // a.click()

    setState("Download");

    const resDelete = await fetch("/api/delete", {
      headers: { fileName },
    });
    await resDelete.json();
  };

  return (
    <Button onClick={onClick} fontSize={"xs"} size={"xs"}>
      {state}
    </Button>
  );
};

export default DownloadData;
